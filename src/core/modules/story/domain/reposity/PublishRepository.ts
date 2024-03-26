import { Publication } from '../models/Publication';

export interface PublishRepository {
    publish(file: File): Promise<Publication>;
}
