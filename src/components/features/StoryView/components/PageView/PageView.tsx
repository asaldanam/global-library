import { Page } from '@/core/story';
import { styled } from '@/styles/styled';

type PageViewProps = {
    page: Page;
};

const PageView = ({ page }: PageViewProps) => {
    return (
        <>
            <style>{styles}</style>
            <article className="PageView StoryView-container">
                {page.blocks.map(({ data, type }, index) => {
                    if (type === 'paragraph') {
                        const text = data.text;
                        if (!text) return null;

                        const capitalLetterSize = text.length > 180 ? '5em' : '3em';

                        // No funcionará si el primer bloque no es paragraph
                        const capitalLetter = `<span style="font-size: ${capitalLetterSize}" class="PageView-capital">${text[0]}</span>`;
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
            </article>
        </>
    );
};

export default PageView;

const styles = styled`
    .PageView {
        font-size: 1em;
        line-height: 1.5em;
        letter-spacing: -0.003em;

        text-align: justify;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    .PageView p + p {
        text-indent: 1em;
    }

    .PageView-capital {
        margin-right: 0.125em;
        position: relative;;
        font-weight: 500;
        position: relative;
        top: 6px;
        float: left;
        line-height: 0.8em;
    }

    @media (max-width: 559px) {
        .PageView-capital {
            font-size: 3em !important;
        }
    }
`;
