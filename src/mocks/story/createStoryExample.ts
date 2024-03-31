import { Block, Story } from '@/core/story/domain';
import blocks_id from '@/mocks/notion/blocks_id.json';

const blocks = blocks_id.results
    .map((block) => ({
        type: 'paragraph',
        data: {
            text: block.paragraph?.rich_text.map((t) => t.text.content).join('')
        }
    }))
    .filter((b) => b.data.text);

export const createStoryExample = () => {
    const story: Story = {
        id: crypto.randomUUID(),
        title: 'Razones',
        meta: {
            author: '',
            createdAt: '',
            category: '',
            language: '',
            cover: ''
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
    };

    return story;
};
