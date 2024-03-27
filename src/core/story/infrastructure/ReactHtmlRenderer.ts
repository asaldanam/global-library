import { File } from '@web-std/file';

import { Story } from '../domain/models/Story/Story';
import { Renderer } from '../domain/interfaces/Renderer';

export class ReactHtmlRenderer implements Renderer {
    constructor(
        /** A react component with story: Story prop */
        public readonly Component: React.FC<{ story: Story }>
    ) {}

    async render(story: Story): Promise<File[]> {
        const { Component } = this;

        // Lazy load to bypass next.js check that prevenst import react-dom/server
        const ReactDOMServer = (await import('react-dom/server')).default;

        // This is the same as ReactDOMServer.renderToStaticMarkup(<Component story={story} />)
        // but I prefer to use the component directly to avoid JSX transpilation
        const raw = ReactDOMServer.renderToStaticMarkup(Component({ story }));

        // Replace &quot; with "
        const html = raw.replaceAll(/&quot;/g, '"');

        const index = new File([html], 'index.html', { type: 'text/html', endings: 'native' });
        const files = [index];

        return files;
    }
}
