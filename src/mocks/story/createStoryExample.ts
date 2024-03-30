import { Block } from '@/core/story';
import { createStory } from '../../core/story';
import blocks_id from '@/mocks/notion/blocks_id.json';

const blocks = blocks_id.results
    .map((block) => ({
        type: 'paragraph',
        data: {
            text: block.paragraph?.rich_text.map((t) => t.text.content).join('')
        }
    }))
    .filter((b) => b.data.text);

export const createStoryExample = () =>
    createStory({
        cover: '',
        id: crypto.randomUUID(),
        title: 'Razones',
        meta: {
            author: {
                avatar: 'https://source.unsplash.com/random/100x100',
                name: 'Derlan',
                email: ''
            },
            createdAt: new Date().toISOString(),
            version: 1,
            lang: 'es'
        },
        content: [
            {
                id: crypto.randomUUID(),
                title: 'Capítulo 1',
                pages: [
                    // example page
                    { blocks: blocks as Block[] }
                ]
            }
        ]
    });
