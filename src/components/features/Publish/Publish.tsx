'use client';

import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

import { Button } from '@/components/ui/button';
import { Publication, Story, createStory, createStoryExample } from '@/core/story';
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
        <main className="flex flex-col items-center h-dvh">
            <div className="Publish">
                <div className="flex flex-col p-7 text-xs">
                    <pre className="text-xs bg-slate-50 p-3 text-ellipsis max-w-full whitespace-break-spaces overflow-hidden">
                        <code>{story?.title}</code>
                    </pre>

                    <div className="mt-3">
                        <Button onClick={publish}>Publish</Button>
                    </div>

                    {isMutating && <p>Publishing...</p>}

                    {publication && (
                        <pre className="text-xs bg-slate-50 p-3 text-xs mt-6">
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
                </div>
            </div>
        </main>
    );
};

export default Publish;
