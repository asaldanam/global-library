import { Story } from '@/core/story/domain';

export function calcReadTime(story: Story) {
    const totalWords = story.content
        .flatMap((section) => section.pages)
        .flatMap((page) => page.blocks)
        .filter((block) => block.type === 'paragraph')
        .reduce((acc, block) => acc + (block?.data?.text?.split(' ')?.length || 0), 0);

    return Math.round(totalWords / 200);
}
