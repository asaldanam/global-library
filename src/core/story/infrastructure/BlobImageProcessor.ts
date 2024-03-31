import { File } from '@web-std/file';
import { ImageProcessor, ImageSource } from '../domain/interfaces/ImageProcessor';

export class BlobImageProcessor implements ImageProcessor {
    constructor() {}

    async processImages(images: ImageSource[]): Promise<File[]> {
        const requests = images.filter(this.isBase64).map(this.toFile);
        const files = await Promise.all(requests);

        return files;
    }

    private async toFile(image: ImageSource): Promise<File> {
        const { source: base64, filename } = image;

        // remove base64 image data jpeg
        const data = base64.split(',')[1];
        const type = base64.split(';')[0].split(':')[1];
        const ext = type.split('/')[1];

        const byteCharacters = atob(data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: type });

        const file: File = new File([blob], `${filename}.${ext}`, { type });

        return file;
    }

    private isBase64(image: ImageSource): boolean {
        const { source } = image;
        return source.startsWith('data:image/');
    }
}
