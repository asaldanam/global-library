import { Publication } from '../models/Publication/Publication';

export interface FileStorage {
    uploadFilesDirectory(file: File[]): Promise<Publication>;
}
