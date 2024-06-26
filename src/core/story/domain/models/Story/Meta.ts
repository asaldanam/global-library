import { z } from 'zod';
import { Category } from './Category';
import { Language } from './Language';
import { Cover } from './Cover';

export type Mwta = z.infer<typeof Meta>;

export const Meta = z.object({
    author: z.string().optional(),
    createdAt: z.string(),
    cover: Cover,
    category: Category,
    language: Language
});

export const createMeta = (story: Mwta) => Meta.parse(story);
