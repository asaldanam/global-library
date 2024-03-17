import { NftStoragePublishRepository, StoryPublisher } from '@global-library/core';

export const storyPublisherService = new StoryPublisher(new NftStoragePublishRepository());
