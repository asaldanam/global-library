import { Publication } from "../../domain/models/Publication";
import { Story } from "../../domain/models/Story";
import { PublishRepository } from "../../domain/reposity/PublishRepository";

export class StoryPublisher {
    constructor(
        public readonly repository: PublishRepository
    ) { }
    
    async publish(data: any): Promise<Publication> {
        const story = new Story('uuid');
        const publication = this.repository.publish(story);
        return publication;
    }
}