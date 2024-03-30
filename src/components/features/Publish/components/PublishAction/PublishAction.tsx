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
import { cn } from '@/lib/utils';
import { Satisfy } from 'next/font/google';
import Link from 'next/link';

type PublishActionProps = {
    story?: Story;
};

const PublishAction = (props: PublishActionProps) => {
    const { story } = props;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" disabled={!story}>
                    Publish
                </Button>
            </DialogTrigger>
            <DialogContent>{story && <Publish story={story} />}</DialogContent>
        </Dialog>
    );
};

export default PublishAction;

const satisfy = Satisfy({
    weight: ['400'],
    subsets: ['latin']
});
