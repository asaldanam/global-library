import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const PublishDialogHeader = () => (
    <DialogHeader>
        <DialogTitle>Publish your story</DialogTitle>
        <DialogDescription>
            Your story will be published on{' '}
            <Link href="https://ipfs.tech/" target="_blank">
                IPFS
            </Link>
            , the interplanetary file storage platform where it will remain forever.
            <Link href="/faq#what-means-forever" target="_blank">
                <InfoCircledIcon width={14} height={14} className="ml-1 inline" />
            </Link>
        </DialogDescription>
    </DialogHeader>
);

export default PublishDialogHeader;
