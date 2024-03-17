import { z } from 'zod';

const Publication = z.object({
  cid: z.string()
});

export type Publication = z.infer<typeof Publication>;

export const createPublication = (publication: Publication) => Publication.parse(publication);
