import { styled } from '@/styles/styled';

export const theme = styled`
    :root {
        --font-size: 1rem;
        --max-width: 42em;
    }

    @media (prefers-color-scheme: light) {
        :root {
            --background: 0 0% 100%;
            --background-muted: 0 0% 95%;
            --foreground: 0 0% 0%;
            --foreground-muted: 0 0% 45%;
            --link: 240 100% 50%;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background: 0 0% 0%;
            --background-muted: 0 0% 10%;
            --foreground: 0 0% 95%;
            --foreground-muted: 0 0% 65%;
            --link: 0 0% 100%;
        }
    }
`;
