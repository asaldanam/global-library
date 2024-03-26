import { Publication } from '../models/Publication/Publication';

export interface PublishRepository {
    publish(file: File): Promise<Publication>;
}
