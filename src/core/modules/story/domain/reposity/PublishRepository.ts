import { Publication } from '../models/Publication/Publication';

export interface PublishRepository {
    publish(blob: Blob): Promise<Publication>;
}
