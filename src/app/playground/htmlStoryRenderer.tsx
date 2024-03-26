'use server';

import { Story } from '@/core';
import { renderToStaticMarkup } from 'react-dom/server';

export async function htmlStoryRenderer(story: Story) {
    const html = renderToStaticMarkup(<StoryHtml />);

    return html;
}

export async function StoryHtml() {
    return (
        <>
            <h1>Hola</h1>
            <p>adsfasdfasdfasdfa</p>
        </>
    );
}
