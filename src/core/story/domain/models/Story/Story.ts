import { z } from 'zod';
import { Chapter } from './Chapter';
import { Meta } from './Meta';

export type Story = z.infer<typeof Story>;

export const Story = z.object({
    id: z.string().uuid(),
    title: z.string(),
    meta: Meta,
    content: z.array(Chapter)
});

export const createStory = (story: Story) => Story.parse(story);
