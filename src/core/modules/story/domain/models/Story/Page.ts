import { z } from 'zod';
import { Block } from './Block';

export type Page = z.infer<typeof Page>;

export const Page = z.object({
    blocks: z.array(Block)
});
