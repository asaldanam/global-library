import { z } from 'zod';
import { Chapter } from './Chapter';
import { Languages } from './Languages';
import { Category } from './Categories';

export type Mwta = z.infer<typeof Meta>;

export const Meta = z.object({
    author: z.string().optional(),
    createdAt: z.string(),
    category: Category,
    lang: Languages
});

export const createMeta = (story: Mwta) => Meta.parse(story);
