import { Publication, createPublication } from '../../domain/models/Publication/Publication';
import { createStory } from '../../domain/models/Story/Story';
import { FileStorage } from '../../domain/interfaces/FileStorage';
import { Renderer } from '../../domain/interfaces/Renderer';

export class PublishService {
    constructor(public readonly renderer: Renderer, public readonly storage: FileStorage) {}

    async publish(data: any): Promise<Publication> {
        const story = createStory(data);
        const files = await this.renderer.toFiles(story);

        const { path } = await this.storage.upload(files);
        const publication = createPublication({ path, story });

        return publication;
    }
}
