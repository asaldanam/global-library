'use client';
import { useEffect, useState } from 'react';

import Header from '@/components/sdk/Header';
import { Story, createStoryExample } from '@/core/story';
import S from './Editor.module.css';
import PublishAction from './components/PublishAction';
import SaveAction from './components/SaveAction';

const Editor = () => {
    const [story, setStory] = useState<Story>();

    useEffect(() => {
        setStory(createStoryExample());
    }, []);

    return (
        <main className={S.Editor}>
            <Header>
                <SaveAction />
                <PublishAction story={story} />
            </Header>

            <div className="container flex max-w-screen-2xl items-center pt-6">
                <pre className="overflow-hidden text-ellipsis text-xs bg-muted p-3 rounded-lg">
                    {JSON.stringify(story, null, 1)}
                </pre>
            </div>
        </main>
    );
};

export default Editor;
