import { NftStoragePublishRepository, StoryPublisher } from '@core/index';

export const storyPublisher = new StoryPublisher(new NftStoragePublishRepository());
