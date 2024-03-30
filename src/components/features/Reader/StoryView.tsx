/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import { Story } from '@/core/story';
import PageView from './components/PageView';
import { theme } from './styles/theme.css';
import { styled } from '@/styles/styled';
import { common } from './styles/common.css';

type StoryViewProps = {
    story: Story;
};

const StoryView = ({ story }: StoryViewProps) => {
    const firstPage = story.content[0].pages[0];
    const description = firstPage.blocks.find((b) => b.type === 'paragraph')?.data?.text?.slice(0, 150) || '';

    return (
        <html lang={story.meta.lang}>
            <head>
                {/* Meta */}
                <meta lang={story.meta.lang} />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index, follow" />

                {/* Content */}
                <title>{story.title}</title>
                <meta name="description" content={description} />
                <meta name="author" content={story.meta.author.name} />
                <meta name="keywords" content={story.title} />

                {/* Open graph */}
                <meta property="og:title" content={story.title} />
                <meta property="og:description" content={`${description} ${description.length > 150 ? '[...]' : ''}`} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Generated with fabula.pub" />
                <meta property="og:image" content={story.cover} />

                {/* TODO Favicon */}
                {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" /> */}

                {/* Styles */}
                <style>{theme}</style>
                <style>{styles}</style>
                <style>{common}</style>
            </head>

            <body>
                <main className="StoryView">
                    <section>
                        <h1>{story.title}</h1>
                        <PageView page={firstPage} />
                    </section>
                    <footer className="StoryView-footer StoryView-container">
                        <p>
                            © {new Date().getFullYear()} {story.meta.author.name}
                        </p>
                        <p>
                            <small>
                                <em>
                                    Generated with <a href="https://fabula.pub">fabula.pub</a>
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

        font-size: 100%;
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }

    body {
        padding: 1rem;
        background: hsl(var(--background));
        color: hsl(var(--foreground));
    }

    .StoryView {
        font-size: var(--font-size);
        font-size: 1rem;
        padding-top: 2rem;
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

    h1 {
        margin-top: 0;
        margin-bottom: 1em;
        text-align: center;
        // tamaño de fuente según ancho de la pantalla
        font-size: clamp(1.5rem, 3vw, 3.5rem);
    }

    a {
        color: hsl(var(--link));
        text-decoration: none;
    }

    .StoryView-footer {
        font-size: 0.875em;
        color: hsl(var(--foreground-muted));
        text-align: center;

        margin-top: 2em;
        margin-bottom: 1em;
    }

    .StoryView-footer p {
        margin: 0;
    }
`;
