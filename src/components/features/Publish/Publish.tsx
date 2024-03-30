'use client';

import { Button } from '@/components/ui/button';
import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Publication, Story } from '@/core/story';
import { mutator } from '@/lib/mutator';
import { cn } from '@/lib/utils';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import useSWRMutation from 'swr/mutation';

type PublishProps = {
    story: Story;
};

const Publish = (props: PublishProps) => {
    const { story } = props;
    const { trigger, isMutating, data } = useSWRMutation('/api/publish', mutator({ method: 'POST' }));
    const publication: Publication | null = data ? data : null;

    const publish = () => {
        if (!story) return;
        trigger(story);
    };

    const { content: _, ...rest } = story;

    const isLoading = isMutating;

    return (
        <>
            {!publication && !isMutating && (
                <>
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

                    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm py-3 min-h-48">
                        <div className="flex flex-col items-center gap-1 text-center">
                            <p className="text-xl font-bold tracking-tight">Add a cover</p>
                            <p className="text-sm text-muted-foreground">An awesome image your story more attractive</p>
                        </div>
                    </div>

                    <div className="w-full flex gap-5 mt-3">
                        {/* <Button className="w-full" variant="outline" size="lg">
                            Cancel
                        </Button> */}
                        <Button className="w-full" size="lg" onClick={publish}>
                            Publish
                        </Button>
                    </div>
                </>
            )}

            {isLoading && (
                <div className={`flex w-full flex-col items-center pb-3`}>
                    <object data="/assets/pics/girl.svg" className="w-full h-auto grayscale-[85%]" type="image/svg+xml">
                        <img src="/assets/pics/girl.svg" />
                    </object>
                    <p className="mt-3">Now publishing, wait a moment...</p>
                </div>
            )}

            {publication && (
                <pre className="w-full overflow-hidden text-ellipsis text-xs bg-slate-50 p-3 text-xs">
                    <div>Published!</div>
                    <a
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-1 block"
                        href={`https://nftstorage.link/ipfs/${publication.path}`}
                        target="_blank"
                    >
                        ipfs://{publication.path}
                    </a>
                </pre>
            )}
        </>
    );
};

export default Publish;
