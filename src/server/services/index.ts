import { NftStoragePublishRepository, PublishService } from '@/core/story';

export const storyPublisher = new PublishService(new NftStoragePublishRepository());
