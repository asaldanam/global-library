import { Publication } from '../../domain/models/Publication';
import { createStory } from '../../domain/models/Story';
import { PublishRepository } from '../../domain/reposity/PublishRepository';

export class StoryExporter {
    constructor(public readonly repository: PublishRepository) {}

    async publish(data: any): Promise<Publication> {
        const story = createStory(data);
        const publication = this.repository.publish(story);
        return publication;
    }
}
