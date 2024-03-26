import { Publication } from '../../domain/models/Publication';
import { createStory } from '../../domain/models/Story';
import { PublishRepository } from '../../domain/reposity/PublishRepository';

export class StoryPublisher {
    constructor(public readonly repository: PublishRepository) {}

    async publish(data: any): Promise<Publication> {
        const story = createStory(data);
        const file: File = new File([JSON.stringify(story)], 'story.json', { type: 'application/json' });
        const publication = this.repository.publish(file);
        return publication;
    }
}
