import { Block, createStory } from '@/core/story/domain';
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
            author: '',
            createdAt: new Date().toISOString(),
            category: 'adventure',
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
