import { z } from 'zod';
import { Story } from '../Story/Story';

const Publication = z.object({
    path: z.string(),
    story: Story
});

export type Publication = z.infer<typeof Publication>;

export const createPublication = (publication: Publication) => Publication.parse(publication);
