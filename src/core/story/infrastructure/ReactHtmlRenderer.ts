import { File } from '@web-std/file';

import { Story } from '../domain/models/Story/Story';
import { Renderer } from '../domain/interfaces/Renderer';

export class ReactHtmlRenderer implements Renderer {
    private readonly imageProcessor = new ImageProcessor();

    constructor(
        /** A react component with story: Story prop */
        public readonly Component: React.FC<{ story: Story }>
    ) {}

    async toFiles(story: Story): Promise<File[]> {
        const images = await this.imageProcessor.toFiles(story);
        const html = await this.render(story);

        const index = new File([html], 'index.html', { type: 'text/html', endings: 'native' });
        const files = [index, ...images];

        return files;
    }

    async render(story: Story): Promise<string> {
        const { Component } = this;

        // Lazy load to bypass next.js check that prevenst import react-dom/server
        const ReactDOMServer = (await import('react-dom/server')).default;

        // This is the same as ReactDOMServer.renderToStaticMarkup(<Component story={story} />)
        // but I prefer to use the component directly to avoid JSX transpilation
        const raw = ReactDOMServer.renderToStaticMarkup(Component({ story }));

        // Replace &quot; with "
        const html = raw.replaceAll(/&quot;/g, '"').replaceAll(/&#x27;/g, "'");

        return html;
    }
}

class ImageProcessor {
    constructor() {}

    async toFiles(story: Story): Promise<File[]> {
        const { cover } = story;

        let images: File[] = [];

        if (this.isBase64(story.cover)) {
            const cover = await this.toFile(story.cover);
            images.push(cover);
            story.cover = cover.name;
        }

        return images;
    }

    private async toFile(base64: string): Promise<File> {
        const data = base64.replace(/^data:image\/jpeg;base64,/, '');
        const type = base64.split(';')[0].split(':')[1];
        const ext = type.split('/')[1];

        const byteCharacters = atob(data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: type });

        const img: File = new File([blob], `/assets/cover.${ext}`, { type });

        return img;
    }

    private isBase64(str: string): boolean {
        return str.startsWith('data:image/');
    }
}
