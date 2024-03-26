import { Publication } from '../../domain/models/Publication';
import { createStory } from '../../domain/models/Story';
import { PublishRepository } from '../../domain/reposity/PublishRepository';

export class NotionStoryImporter {
    constructor(public readonly repository: PublishRepository) {}

    async import(data: any) {}
}
