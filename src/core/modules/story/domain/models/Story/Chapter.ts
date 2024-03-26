import { z } from 'zod';
import { Page } from './Page';

export type Chapter = z.infer<typeof Chapter>;

export const Chapter = z.object({
    id: z.string().uuid(),
    title: z.string(),
    pages: z.array(Page)
});
