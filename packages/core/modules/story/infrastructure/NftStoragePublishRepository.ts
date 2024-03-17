import { Publication } from "../domain/models/Publication";
import { Story } from "../domain/models/Story";
import { PublishRepository } from "../domain/reposity/PublishRepository";

export class NftStoragePublishRepository implements PublishRepository {
    async publish(story: Story) {
        return new Publication('uuid');
    }
}