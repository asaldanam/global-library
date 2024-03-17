import { z } from 'zod';

const Story = z.object({
  id: z.string(),
  content: z.string()
});

export type Story = z.infer<typeof Story>;

export const createStory = (story: Story) => Story.parse(story);