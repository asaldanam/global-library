import { Publication, createPublication } from '../../domain/models/Publication/Publication';
import { Story, createStory } from '../../domain/models/Story/Story';
import { FileStorage } from '../../domain/interfaces/FileStorage';
import { Renderer } from '../../domain/interfaces/Renderer';
import { BlobImageProcessor } from '../../infrastructure/implementations/BlobImageProcessor';

type PublishServiceConfig = {
    gateways: string[];
};

export class PublishService {
    constructor(
        private readonly config: PublishServiceConfig,
        private readonly renderer: Renderer,
        private readonly storage: FileStorage,
        private readonly imageProcessor: BlobImageProcessor
    ) {}

    async publish(payload: Story): Promise<Publication> {
        const story = createStory({
            ...payload,
            // overrides client createdAt with server time
            meta: { ...payload.meta, createdAt: new Date().toISOString() }
        });

        await this.processCoverImage(story);
        const files = await this.renderer.toFiles(story);

        const { path } = await this.storage.upload(files);
        const publication = createPublication({ path, story });

        return publication;
    }

    private async processCoverImage(story: Story): Promise<void> {
        const { gateways } = this.config;
        const cover = { source: story.meta.cover, filename: 'cover' };

        const [file] = await this.imageProcessor.processImages([cover]);
        if (!file) return;

        const { path: cid } = await this.storage.upload([file]);

        const gateway = gateways[0];
        const url = `https://${cid}.${gateway}/${file.name}`;
        story.meta.cover = url;
    }
}
