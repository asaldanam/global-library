export type ImageSource = { source: string; filename: string };

export interface ImageProcessor {
    processImages(images: ImageSource[]): Promise<File[]>;
}
