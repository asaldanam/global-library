import { Story } from '../..';

export interface Renderer {
    render(story: Story): Promise<string>;
    toFiles(story: Story): Promise<File[]>;
}
