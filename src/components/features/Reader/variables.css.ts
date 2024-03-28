export const variables = /*css*/ `
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
`;
