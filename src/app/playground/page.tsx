'use server';

import { createStoryExample } from '@/core';
import { htmlStoryRenderer } from '../../components/features/Reader/utils/htmlStoryRenderer';

/** /publish */
export default async function Page() {
    const story = createStoryExample();
    const html = await htmlStoryRenderer(story);

    return (
        <>
            <iframe className="w-full h-full fixed" srcDoc={html} />
        </>
    );
}
