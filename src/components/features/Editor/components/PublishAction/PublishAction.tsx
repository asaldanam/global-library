import Publish from '@/components/features/Publish';
import { Button } from '@/components/ui/button';
import { Story } from '@/core/story';

type PublishActionProps = {
    story?: Story;
};

const PublishAction = (props: PublishActionProps) => {
    const { story } = props;

    return (
        <Publish story={story}>
            <Button variant="default" disabled={!story}>
                Publish
            </Button>
        </Publish>
    );
};

export default PublishAction;
