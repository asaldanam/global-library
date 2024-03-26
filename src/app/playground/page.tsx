'use server';

import { createStoryExample } from '@/core';
import { htmlStoryRenderer } from './htmlStoryRenderer';

/** /publish */
export default async function Page() {
    const a = await htmlStoryRenderer(createStoryExample());
    const page = `
    <html>
        <head>
            <title>Page</title>
        </head>
        <body>
            <h1>Page</h1>
        </body>
    </html>`;
    console.log(a);

    return (
        <>
            <iframe className="w-full h-full fixed" srcDoc={page} />
        </>
    );
}
