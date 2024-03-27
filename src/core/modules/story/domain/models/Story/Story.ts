import { z } from 'zod';
import { Chapter } from './Chapter';

export type Story = z.infer<typeof Story>;

const Story = z.object({
    id: z.string().uuid(),
    cid: z.string().optional(),
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

export const createStory = (story: Story) => Story.parse(story);
