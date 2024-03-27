import { z } from 'zod';

const Publication = z.object({
    path: z.string()
});

export type Publication = z.infer<typeof Publication>;

export const createPublication = (publication: Publication) => Publication.parse(publication);
