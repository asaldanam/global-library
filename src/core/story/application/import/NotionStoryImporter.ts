import { Publication } from '../../domain/models/Publication/Publication';
import { createStory } from '../../domain/models/Story/Story';
import { FileStorage } from '../../domain/interfaces/FileStorage';

export class NotionStoryImporter {
    constructor(public readonly repository: FileStorage) {}

    async import(data: any) {}
}
