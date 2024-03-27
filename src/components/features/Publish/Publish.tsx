'use client';

import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

import { Button } from '@/components/ui/button';
import { Publication, Story, createStory, createStoryExample } from '@/core';
import { mutator } from '@/browser/lib/mutator';

const Publish = () => {
    const { trigger, isMutating, data } = useSWRMutation('/api/publish', mutator({ method: 'POST' }));
    const publication: Publication | null = data ? data : null;

    const [story, setStory] = useState<Story | null>(null);

    const publish = () => {
        if (!story) return;
        trigger(story);
    };

    useEffect(() => {
        const newStory = createStoryExample();

        setStory(newStory);
    }, []);

    return (
        <>
            <div className="Publish">
                <div className="flex flex-col items-end p-7 text-xs">
                    <pre className="text-xs bg-slate-50 p-3 text-ellipsis max-w-full whitespace-break-spaces overflow-hidden">
                        <code>{JSON.stringify(story, null, 2)}</code>
                    </pre>
                    <div className="mt-4">
                        <Button onClick={publish}>Publish</Button>
                    </div>

                    {isMutating && <p>Publishing...</p>}
                    {publication && (
                        <pre className="text-xs bg-slate-50 p-3 text-xs">
                            <a href={`https://nftstorage.link/ipfs/${publication.cid}`} target="_blank">
                                {publication.cid}
                            </a>
                        </pre>
                    )}
                </div>
            </div>
        </>
    );
};

export default Publish;
