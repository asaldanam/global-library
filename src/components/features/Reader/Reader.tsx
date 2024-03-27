/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import { Story } from '@/core/story';

type ReaderProps = {
    story: Story;
};

const Reader = ({ story }: ReaderProps) => {
    const page = story.content[0].pages[0];
    const description = page.blocks.find((b) => b.type === 'paragraph')?.data?.text?.slice(0, 150) || '';

    return (
        <html lang={story.meta.lang}>
            <head>
                {/* Meta */}
                <meta
                    http-equiv="Content-Security-Policy"
                    content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
                <meta lang={story.meta.lang} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content={story.meta.author.name} />
                <meta name="keywords" content={story.title} />
                <meta name="theme-color" content="#000000" />

                {/* Content */}
                <title>{story.title}</title>
                <meta property="og:title" content={story.title} />
                <meta name="description" content={description} />
                <meta property="og:description" content={`${description} ${description.length > 150 ? '[...]' : ''}`} />
                <meta property="og:type" content="story" />

                {/* TODO Favicon */}
                {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" /> */}

                {/* Font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
                    rel="stylesheet"
                />

                {/* Styles */}
                <style>{styles}</style>
            </head>

            <body>
                <main className="Reader">
                    <section className="Reader-content">
                        <h1>{story.title}</h1>

                        {page.blocks.map(({ data, type }, index) => {
                            if (type === 'paragraph') {
                                const text = data.text;
                                if (!text) return null;

                                const capitalLetterSize = text.length > 180 ? '5.5em' : '3.5em';

                                // No funcionará si el primer bloque no es paragraph
                                const capitalLetter = `<span style="font-size: ${capitalLetterSize}" class="Reader-capital">${text[0]}</span>`;
                                const restText = text.slice(1);

                                const capitalizedText = capitalLetter + restText;

                                return (
                                    <p
                                        key={index}
                                        dangerouslySetInnerHTML={{ __html: index === 0 ? capitalizedText : text }}
                                    ></p>
                                );
                            }
                        })}
                    </section>
                    <footer className="Reader-footer">
                        <p>
                            © {new Date().getFullYear()} {story.meta.author.name}
                        </p>
                        <p>
                            <small>
                                <em>
                                    Generated with <a href="https://my-story.pub">my-story.pub</a>
                                </em>
                            </small>
                        </p>
                    </footer>
                </main>

                <script id="#story" data-story={JSON.stringify(story)} />
            </body>
        </html>
    );
};

export default Reader;

const styles = /*css*/ `
    :root {
        --font-size: 1rem;
        --max-width: 42em;
    }

    @media (prefers-color-scheme: light) {
        :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 0%;
            --foreground-muted: 0 0% 45%;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background: 0 0% 0%;
            --foreground: 0 0% 100%;
            --foreground-muted: 0 0% 65%;
        }
    }

    html, body {
        padding: 0;
        margin: 0;

        font-size: 100%;
        font-family: "Source Serif 4", Georgia, Cambria, "Times New Roman", Times, serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }

    body {
        padding: 1.5rem;
        background: hsl(var(--background));
        color: hsl(var(--foreground));
    }

    .Reader {
        font-size: var(--font-size);
        font-size: 1rem
    }

    @media (min-width: 375px) {
        .Reader { font-size: 1.125rem }
    }

    @media (min-width: 768px) {
        .Reader { font-size: 1.25rem }
    }

    .Reader-content {
        max-width: var(--max-width);
        margin: 0 auto;
        padding-top: 3em;
        font-size: 1em;
        line-height: 1.6em;
        letter-spacing: -0.003em;

        text-align: justify;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    .Reader-content h1 {
        margin-top: 0;
        margin-bottom: 1em;
        text-align: center;
        font-size: 2em;
    }

    // .Reader-content p + p {
    //     text-indent: 1em;
    // }

    .Reader-capital {
        font-size: 3.5em;
        padding: 0 0.1em 0 0;
        font-weight: 500;
        position: relative;
        top: 0.05em;
        float: left;
        line-height: 0.8em;
    }

    .Reader-footer {
        max-width: var(--max-width);
        margin: 2em auto 1em;
        text-align: center;
        font-size: 0.875em;
        color: hsl(var(--foreground-muted));
    }

    .Reader-footer p {
        margin: 0;
    }
`;
