import { Publication } from '../../domain/models/Publication/Publication';
import { createStory } from '../../domain/models/Story/Story';
import { PublishRepository } from '../../domain/reposity/PublishRepository';

export class StoryPublisher {
    constructor(public readonly repository: PublishRepository) {}

    async publish(data: any): Promise<Publication> {
        const story = createStory(data);

        // crea un File cuyo contenido es el stringify de la story
        const file = new Blob([JSON.stringify(story)], { type: 'application/json' });

        const publication = this.repository.publish(file);
        return publication;
    }
}
