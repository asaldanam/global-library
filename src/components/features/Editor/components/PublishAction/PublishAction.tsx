import Publish from '@/components/features/Publish';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Story } from '@/core/story';
import Link from 'next/link';

type PublishActionProps = {
    story?: Story;
};

const PublishAction = (props: PublishActionProps) => {
    const { story } = props;

    return (
        <Dialog>
            <DialogTrigger>
                <Button disabled={!story} variant="default">
                    Publish
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>Publish</DialogTitle>
                    <DialogDescription>
                        Your story will be published on{' '}
                        <Link href="https://ipfs.tech/" target="_blank">
                            IPFS
                        </Link>
                        , the interplanetary file storage platform where it will remain forever.
                    </DialogDescription>
                </DialogHeader>
                {story && <Publish story={story} />}
            </DialogContent>
        </Dialog>
    );
};

export default PublishAction;
