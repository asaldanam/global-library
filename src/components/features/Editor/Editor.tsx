'use client';
import { useEffect, useState } from 'react';

import Header from '@/components/sdk/Header';
import { Story, createStoryExample } from '@/core/story';
import S from './Editor.module.css';
import PublishAction from './components/PublishAction';

const Editor = () => {
    const [story, setStory] = useState<Story>();

    useEffect(() => {
        setStory(createStoryExample());
    }, []);

    return (
        <main className={S.Editor}>
            <Header>
                <PublishAction story={story} />
            </Header>

            <div className="p-6">
                <pre className="overflow-hidden text-ellipsis mx-auto text-xs bg-slate-50 p-3 text-xs">
                    {JSON.stringify(story, null, 2)}
                </pre>
            </div>
        </main>
    );
};

export default Editor;
