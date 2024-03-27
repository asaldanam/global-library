import { File, NFTStorage } from 'nft.storage';

import { createPublication } from '../../domain/models/Publication/Publication';
import { PublishRepository } from '../../domain/reposity/PublishRepository';

const NFT_STORAGE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgxOGE3MWEyOThmMmMzN0YwMmQyMjVDZjhiYTU5OENiQUU0Zjk1NjQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcxMDY3NzI0NTkyMSwibmFtZSI6Imdsb2JhbC1saWJyYXJ5In0._hbFQLXQfjIOYLeXnyyIbqiCF5kIK85p25BpQ3tUB-k';

export class NftStoragePublishRepository implements PublishRepository {
    async publish(blob: Blob) {
        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

        // call client.store, passing in the image & metadata
        const cid = await nftstorage.storeBlob(blob);

        const publication = createPublication({ cid });

        return publication;
    }
}
