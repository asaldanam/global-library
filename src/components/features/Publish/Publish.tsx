'use client';

import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

import { Button } from '@/components/ui/button';
import { Publication, Story, createStory, createStoryExample } from '@/core/story';
import { mutator } from '@/lib/mutator';

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

    return (
        <div className="Publish">
            <div className="flex flex-col items-end">
                {!publication && !isMutating && (
                    <pre className="w-full text-xs bg-slate-50 p-3 text-ellipsis max-w-full whitespace-break-spaces overflow-hidden">
                        {JSON.stringify(rest, null, 2)}
                    </pre>
                )}

                {isMutating && <p>Publishing...</p>}

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

                <div className="mt-3">
                    <Button onClick={publish}>Publish</Button>
                </div>
            </div>
        </div>
    );
};

export default Publish;
