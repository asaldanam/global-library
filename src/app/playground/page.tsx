'use server';

import Reader from '@/components/features/StoryView';
import { createStoryExample } from '@/core/story';
import { ReactHtmlRenderer } from '@/core/story/infrastructure/ReactHtmlRenderer';

const renderer = new ReactHtmlRenderer(Reader);

/** /publish */
export default async function Page() {
    const story = createStoryExample();
    const html = await renderer.render(story);

    return (
        <>
            <iframe className="w-full h-full fixed" srcDoc={html} />
        </>
    );
}
