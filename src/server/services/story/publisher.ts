import Reader from '@/components/features/Reader';
import { IpfsFileStorage, PublishService } from '@/core/story';
import { BlobImageProcessor } from '@/core/story/infrastructure/BlobImageProcessor';
import { ReactHtmlRenderer } from '@/core/story/infrastructure/ReactHtmlRenderer';

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
