import { Publication } from "../models/Publication";
import { Story } from "../models/Story";

export interface PublishRepository {
    publish(story: Story): Promise<Publication>;
}