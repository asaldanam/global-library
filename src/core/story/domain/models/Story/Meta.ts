import { z } from 'zod';
import { Chapter } from './Chapter';
import { Languages } from './Languages';
import { Categories } from './Categories';

export type Mwta = z.infer<typeof Meta>;

export const Meta = z.object({
    author: z.string().optional(),
    createdAt: z.string(),
    category: Categories.optional(),
    lang: Languages
});

export const createMeta = (story: Mwta) => Meta.parse(story);
