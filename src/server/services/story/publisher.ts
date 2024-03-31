import Reader from '@/components/features/StoryView';
import { PublishService } from '@/core/story/application';
import { BlobImageProcessor, IpfsFileStorage, ReactHtmlRenderer } from '@/core/story/infrastructure';

export const publisher = new PublishService(
    {
        gateways: ['ipfs.nftstorage.link']
    },
    // Renderer
    new ReactHtmlRenderer(Reader),
    // File storage
    new IpfsFileStorage(),
    // Image processor
    new BlobImageProcessor()
);
