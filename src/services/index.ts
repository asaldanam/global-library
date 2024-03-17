import { NftStoragePublishRepository, StoryPublisher } from '@/core';

export const storyPublisherService = new StoryPublisher(new NftStoragePublishRepository());
