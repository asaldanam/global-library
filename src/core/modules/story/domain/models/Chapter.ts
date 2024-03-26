import { z } from 'zod';

export const Chapter = z.object({
    title: z.string(),
    pages: z.array(z.string())
});

export type Chapter = z.infer<typeof Chapter>;

export const createStory = (story: Chapter) => Chapter.parse(story);
