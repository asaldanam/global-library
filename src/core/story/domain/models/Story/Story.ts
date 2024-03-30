import { z } from 'zod';
import { Chapter } from './Chapter';
import { Languages } from './Languages';

export type Story = z.infer<typeof Story>;

export const Story = z.object({
    id: z.string().uuid(),
    meta: z.object({
        author: z.object({
            name: z.string(),
            email: z.string(),
            avatar: z.string()
        }),
        createdAt: z.string(),
        version: z.number(),
        lang: Languages
    }),
    content: z.array(Chapter),
    title: z.string(),
    cover: z.string()
});

export const createStory = (story: Story) => Story.parse(story);
