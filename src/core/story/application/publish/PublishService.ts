import { Publication } from '../../domain/models/Publication/Publication';
import { createStory } from '../../domain/models/Story/Story';
import { FileStorage } from '../../domain/interfaces/FileStorage';
import { Renderer } from '../../domain/interfaces/Renderer';

export class PublishService {
    constructor(public readonly renderer: Renderer, public readonly storage: FileStorage) {}

    async publish(data: any): Promise<Publication> {
        const story = createStory(data);

        const file = await this.renderer.render(story);

        // // crea un File cuyo contenido es el stringify de la story
        // const file = new Blob([JSON.stringify(story)], { type: 'application/json' });

        const publication = await this.storage.uploadFilesDirectory(file);

        return publication;
    }
}
