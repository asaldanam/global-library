import Reader from '@/components/features/Reader';
import { Story } from '@/core/story';

export async function htmlStoryRenderer(story: Story) {
    const ReactDOMServer = (await import('react-dom/server')).default;
    const raw = ReactDOMServer.renderToStaticMarkup(<Reader story={story} />);
    const html = raw.replaceAll(/&quot;/g, '"');

    return html;
}
