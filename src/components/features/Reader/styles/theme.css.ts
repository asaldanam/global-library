import { styled } from '@/styles/styled';

export const theme = styled`
    :root {
        --font-size: 100%;
        --max-width: 42em;
        --font-sans: Helvetica, Arial, sans-serif, sans-serif;
        --font-serif: Georgia, Cambria, 'Times New Roman', Times, serif;
    }

    @media (prefers-color-scheme: light) {
        :root {
            --background: 0 0% 100%;
            --background-muted: 0 0% 95%;
            --foreground: 0 0% 0%;
            --foreground-muted: 0 0% 45%;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background: 0 0% 0%;
            --background-muted: 0 0% 10%;
            --foreground: 0 0% 95%;
            --foreground-muted: 0 0% 65%;
        }
    }
`;
