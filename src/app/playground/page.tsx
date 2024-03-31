'use server';

import Reader from '@/components/features/StoryView';
import { ReactHtmlRenderer } from '@/core/story/infrastructure';
import { createStoryExample } from '@/mocks/story/createStoryExample';

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
