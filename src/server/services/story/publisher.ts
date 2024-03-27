import Reader from '@/components/features/Reader';
import { IpfsFileStorage, PublishService } from '@/core/story';
import { ReactHtmlRenderer } from '@/core/story/infrastructure/ReactHtmlRenderer';

export const publisher = new PublishService(
    // Renderer
    new ReactHtmlRenderer(Reader),
    // File storage
    new IpfsFileStorage()
);
