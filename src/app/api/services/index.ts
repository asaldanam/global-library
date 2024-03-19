import { NftStoragePublishRepository, StoryPublisher } from '@global-library/core/index';

export const storyPublisher = new StoryPublisher(new NftStoragePublishRepository());
