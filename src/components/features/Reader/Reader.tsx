import { Story } from '@/core';

type ReaderProps = {
    story: Story;
};

const Reader = ({ story }: ReaderProps) => {
    return (
        <html>
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <head>
                <title>Reader</title>
                <style>{styles}</style>
            </head>

            <main>
                <h1>{story.title}</h1>
                <pre>{JSON.stringify(story, null, 2)}</pre>
            </main>
        </html>
    );
};

export default Reader;

const styles = /*css*/ `
    html, body {
        padding: 0;
        margin: 0;
        font-size: 100%;
    }

    body {
        padding: 1rem;
        background: lightgray;
    }

    .Reader {
        color: red;
    }
`;
