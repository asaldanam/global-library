import { Story } from '../..';

export interface Renderer {
    render(story: Story): Promise<File[]>;
}
