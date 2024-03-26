import { Publication } from '../../domain/models/Publication';
import { createStory } from '../../domain/models/Story';
import { PublishRepository } from '../../domain/reposity/PublishRepository';

export class StoryExporter {
    constructor(public readonly repository: PublishRepository) {}

    async publish(data: any): Promise<Publication> {
        const story = createStory(data);

        // crea un File cuyo contenido es el stringify de la story
        const file = new File([JSON.stringify(story)], 'story.json', { type: 'application/json' });

        const publication = this.repository.publish(file);
        return publication;
    }
}
