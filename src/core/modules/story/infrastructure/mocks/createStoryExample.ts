import { createStory } from '../..';

export const createStoryExample = () =>
    createStory({
        cover: 'https://source.unsplash.com/random/800x600',
        id: crypto.randomUUID(),
        title: 'Title',
        meta: {
            author: {
                avatar: 'https://source.unsplash.com/random/100x100',
                name: 'Author',
                email: ''
            },
            createdAt: new Date().toISOString(),
            version: 1
        },
        content: [
            {
                id: crypto.randomUUID(),
                title: 'Capítulo 1',
                pages: [
                    // example page
                    {
                        blocks: [
                            // Example block
                            { type: 'paragraph', data: { text: 'Hello, world!' } }
                        ]
                    }
                ]
            }
        ]
    });
