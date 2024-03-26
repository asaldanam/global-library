import { NftStoragePublishRepository, StoryPublisher } from '@/core';

export const storyPublisher = new StoryPublisher(new NftStoragePublishRepository());
