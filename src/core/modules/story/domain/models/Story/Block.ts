import { z } from 'zod';

export type Block = z.infer<typeof Block>;

export const Block = z.object({
    type: z.enum(['paragraph', 'image']),
    data: z.object({
        text: z.string().optional()
    })
});
