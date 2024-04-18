'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

import Header from '@/components/sdk/Header';
import { Story } from '@/core/story/domain';
import { createStoryExample } from '@/mocks/story/createStoryExample';
import S from './Editor.module.css';
import PublishAction from './components/PublishAction';
import SaveAction from './components/SaveAction';

import EditorJS from '@editorjs/editorjs';
import configuration from './editorjsConfig';

const Editor = () => {
    useLayoutEffect(() => {
        // const editor = new EditorJS(configuration());
        console.log(document.getElementById('editorjs'));
        const editor = new EditorJS({
            /**
             * Id of Element that should contain the Editor
             */
            holder: 'editorjs',

            /**
             * Available Tools list.
             * Pass Tool's class or Settings object for each Tool you want to use
             */
            tools: {
                // ...
                // header: {
                // },
                // ...
            },

            onReady: () => {
                console.log('Editor.js is ready to work!');
            }
        });
    }, []);




    const [story, setStory] = useState<Story>();

    // Provisional example story
    useEffect(() => {
        setStory(createStoryExample());
    }, []);

    return (
        <main className={S.Editor}>
            <Header>
                <SaveAction />
                <PublishAction story={story} />
            </Header>

            <div>
                <div id="editorjs">EDITOR</div>
            </div>

            <div className="container flex max-w-screen-2xl items-center pt-6">
                <pre className="overflow-hidden text-ellipsis text-xs bg-muted p-3 rounded-lg">
                    {JSON.stringify(story, null, 1)}
                </pre>
            </div>
        </main>
    );
};

export default Editor;

// 1er render _< use Effect e inicializar useState
// 2º render -> useLayoutEffect xq ya se renderiza el html

//usar userLayoutEffect


//editorContainer.current, es como un document.getElementById('editorjs') pero con hooks