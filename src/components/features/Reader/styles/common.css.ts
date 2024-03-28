import { styled } from '@/styles/styled';

export const common = styled`
    .StoryView-container {
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 560px) {
        .StoryView-container {
            max-width: calc(var(--max-width) * 0.66);
        }
    }

    @media (min-width: 768px) {
        .StoryView-container {
            max-width: calc(var(--max-width) * 0.8);
        }
    }

    @media (min-width: 960px) {
        .StoryView-container {
            max-width: var(--max-width);
        }
    }
`;
