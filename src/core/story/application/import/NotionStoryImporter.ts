import { Publication } from '../../domain/models/Publication/Publication';
import { createStory } from '../../domain/models/Story/Story';
import { PublishRepository } from '../../domain/reposity/PublishRepository';

export class NotionStoryImporter {
    constructor(public readonly repository: PublishRepository) {}

    async import(data: any) {}
}
