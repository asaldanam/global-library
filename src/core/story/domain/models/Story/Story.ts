import { z } from 'zod';
import { Chapter } from './Chapter';
import { Meta } from './Meta';

export type Story = z.infer<typeof Story>;

export const Story = z.object({
    id: z.string().uuid(),
    meta: Meta,
    content: z.array(Chapter),
    title: z.string(),
    cover: z.string()
});

export const createStory = (story: Story) => Story.parse(story);
