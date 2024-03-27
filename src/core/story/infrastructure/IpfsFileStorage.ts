import { NFTStorage } from 'nft.storage';

import { createPublication } from '../domain/models/Publication/Publication';
import { FileStorage } from '../domain/interfaces/FileStorage';

export class IpfsFileStorage implements FileStorage {
    async uploadFilesDirectory(files: File[]) {
        const token = process.env.NFT_STORAGE_KEY;
        if (!token) throw new Error('NFT_STORAGE_KEY is not defined');

        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token });

        const cid = await nftstorage.storeDirectory(files);
        const publication = createPublication({ path: cid });

        return publication;
    }
}
