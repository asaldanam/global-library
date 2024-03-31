/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import { Story, languages } from '@/core/story/domain';
import PageView from './components/PageView';
import { theme } from './styles/theme.css';
import { styled } from '@/styles/styled';
import { common } from './styles/common.css';
import { calcReadTime } from './utils/calcReadTime';

type StoryViewProps = {
    story: Story;
};

const StoryView = ({ story }: StoryViewProps) => {
    const firstPage = story.content[0].pages[0];
    const description = firstPage.blocks.find((b) => b.type === 'paragraph')?.data?.text?.slice(0, 150) || '';
    const readTime = calcReadTime(story);
    const language = story.meta.language || 'en';
    const author = story.meta.author;
    const createdAt = new Date(story.meta.createdAt).toLocaleDateString(language, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <html lang={language}>
            <head>
                {/* Meta */}
                <meta lang={language} />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index, follow" />

                {/* Content */}
                <title>{story.title}</title>
                <meta name="description" content={description} />
                {author && <meta name="author" content={author} />}
                <meta name="keywords" content={story.title} />

                {/* Open graph */}
                <meta property="og:site_name" content="Published with fabula.pub" />
                <meta property="og:url" content="https://fabula.pub" />
                <meta property="og:title" content={story.title} />
                <meta property="og:description" content={`${description} ${description.length > 150 ? '[...]' : ''}`} />
                <meta property="og:type" content="article" />
                <meta property="og:image" itemProp="image" content={story.cover} />
                <meta property="og:updated_time" content={story.meta.createdAt} />

                {/* TODO Favicon */}
                {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" /> */}

                {/* Styles */}
                <style>{theme}</style>
                <style>{styles}</style>
                <style>{common}</style>
            </head>

            <body>
                <header className="StoryView-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="StoryView-cover" src={story.cover} alt={story.title} />

                    <div className="StoryView-header-content">
                        <h1>{story.title}</h1>
                        {author && (
                            <p className="StoryView-author">
                                by <em>{story.meta.author}</em>
                            </p>
                        )}
                    </div>
                </header>
                <main className="StoryView">
                    <div className="StoryView-container">
                        <header className="StoryView-metabar">
                            <div style={{ marginRight: 'auto' }}>{createdAt}</div>
                            <div>{languages.find((l) => l.value === language)?.label}</div> ·
                            <div>{readTime} min read</div>
                        </header>
                    </div>
                    <section>
                        <PageView page={firstPage} />
                    </section>
                    <footer className="StoryView-footer StoryView-container">
                        {author && (
                            <p>
                                © {new Date(story.meta.createdAt).getFullYear()} {author}
                            </p>
                        )}
                        <p className="StoryView-footer-generated-with">
                            <small>
                                <em>
                                    Published with{' '}
                                    <a href="https://fabula.pub" target="_blank">
                                        Fabula
                                    </a>
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

export default StoryView;

const styles = styled`
    html,
    body {
        padding: 0;
        margin: 0;

        font-size: var(--font-size);
        font-family: var(--font-serif);
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }

    body {
        background: hsl(var(--background));
        color: hsl(var(--foreground));
    }

    .StoryView {
        padding: 2rem 1rem 1rem;
    }

    @media (min-width: 560px) {
        .StoryView {
            font-size: 1.125rem;
        }
    }

    @media (min-width: 768px) {
        .StoryView {
            font-size: 1.25rem;
        }
    }

    a {
        color: hsl(var(--foreground));
        text-decoration: underline;
    }

    .StoryView-header {
        position: relative;
        height: clamp(30vh, 40vw, 60vh);
        display: flex;
        align-items: end;
        justify-content: center;
        box-sizing: border-box;
    }

    .StoryView-header::before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
        background: linear-gradient(0deg, black 0%, transparent 75%);
        opacity: 0.75;
        pointer-events: none;
    }

    .StoryView-header-content {
        position: relative;
        bottom: 15%;
        text-align: center;
        z-index: 3;
        color: white;
        text-shadow: 0 0 30px black;
    }

    .StoryView-header h1 {
        position: relative;
        text-align: center;
        font-size: clamp(1.5em, 3.5vw, 3.5em);
        line-height: 100%;
        font-family: var(--font-sans);
        font-weight: bolder;
        margin: 0;
    }

    .StoryView-author {
        position: relative;
        margin: 0.25em 0;
        font-size: clamp(1em, 3.5vw, 1.5em);
    }

    .StoryView-metabar {
        font-family: var(--font-sans);
        font-size: 0.75em;
        color: hsl(var(--foreground-muted));
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: hsl(var(--background-muted) / 1);
        padding: 0.75em 0;

        display: flex;
        justify-content: end;
        gap: 0.5em;
    }

    .StoryView-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
        object-position: center center;
    }

    .StoryView-footer {
        font-size: 0.875em;
        color: hsl(var(--foreground-muted));
        text-align: center;

        margin: 2em 0 4em;
    }

    .StoryView-footer-generated-with {
        opacity: 0.75;
    }

    .StoryView-footer p {
        margin: 0;
    }
`;
