import { z } from 'zod';
import { Chapter } from './Chapter';

const Story = z.object({
    id: z.string(),
    meta: z.object({
        author: z.object({
            name: z.string(),
            email: z.string(),
            avatar: z.string()
        }),
        createdAt: z.string(),
        version: z.number()
    }),
    content: z.array(Chapter),
    title: z.string(),
    cover: z.string()
});

export type Story = z.infer<typeof Story>;

export const createStory = (story: Story) => Story.parse(story);
