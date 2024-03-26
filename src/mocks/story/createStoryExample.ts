import { Block } from '@/core/modules/story/domain/models/Story/Block';
import { createStory } from '../../core/modules/story';
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
                    { blocks: blocks as Block[] }
                ]
            }
        ]
    });
