'use client';

import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

import { Button } from '@/components/ui/button';
import { Publication, Story, createStory } from '@/core';
import { mutator } from '@/lib/mutator';

const PublishWizard = () => {
    const { trigger, isMutating, data } = useSWRMutation('/api/publish', mutator());
    const publication: Publication | null = data ? data : null;

    const [story, setStory] = useState<Story | null>(null);

    const publish = () => {
        if (!story) return;
        trigger(story);
    };

    useEffect(() => {
        const newStory = createStory({
            content: [{ title: 'Title', pages: [] }],
            cover: 'https://source.unsplash.com/random/800x600',
            id: crypto.randomUUID(),
            title: 'Title',
            meta: {
                author: {
                    avatar: 'https://source.unsplash.com/random/100x100',
                    name: 'Author',
                    email: ''
                },
                createdAt: new Date().toISOString(),
                version: 1
            }
        });
        setStory(newStory);
    }, []);

    return (
        <>
            <div className="PublishWizard">
                <div className="flex flex-col items-end p-7">
                    <pre className="text-xs bg-slate-50 p-3">
                        <code>{JSON.stringify(story, null, 2)}</code>
                    </pre>
                    <div className="mt-4">
                        <Button onClick={publish}>Publish</Button>
                    </div>

                    {isMutating && <p>Publishing...</p>}
                    {publication && (
                        <div>
                            <p>Published!</p>
                            <a href={`https://nftstorage.link/ipfs/${publication.cid}`} target="_blank">
                                {`https://nftstorage.link/ipfs/${publication.cid}`}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PublishWizard;
