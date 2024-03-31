import Publish from '@/components/features/Publish';
import { Button } from '@/components/ui/button';
import { Story } from '@/core/story/domain';

type PublishActionProps = {
    story?: Story;
};

const PublishAction = (props: PublishActionProps) => {
    const { story } = props;

    if (!story) return null;

    return (
        <Publish story={story}>
            <Button variant="default">Publish</Button>
        </Publish>
    );
};

export default PublishAction;
