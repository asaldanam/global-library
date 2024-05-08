'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Header from '@/components/sdk/Header';
import { Story } from '@/core/story/domain';
import { createStoryExample } from '@/mocks/story/createStoryExample';
import S from './Editor.module.css';
import PublishAction from './components/PublishAction';
import SaveAction from './components/SaveAction';

import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
// import configuration from './editorjsConfig';
import { Button } from '@/components/ui/button';

const Editor = () => {
    const editorContainer = useRef(null);
    const [editor, setEditor] = useState<EditorJS | null>(null);

    useEffect(() => {
        if (editorContainer.current) {
            const editorInstance = new EditorJS({
                /**
                 * Id of Element that should contain the Editor
                 */
                holder: editorContainer.current, //es como un document.getElementById('editorjs') pero con hooks

                /**
                 * Available Tools list.
                 * Pass Tool's class or Settings object for each Tool you want to use
                 */
                tools: {
                    image: SimpleImage,
                    // image: {
                    //     class: SimpleImage,
                    //     config: {
                    //         // Configuración adicional si es necesaria
                    //     }
                    // },
                    // ...
                },

                onReady: () => {

                },
                onChange: (...args) => {
                    console.log('Editor.js is changed!', args);
                }
            });

            setEditor(editorInstance);
            console.log('Editor instance:', editorInstance);
        };

        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, []);

    const save = async () => {
        const data = await editor?.save?.();

        // guardar aquí
        console.log(data?.blocks);

        localStorage.setItem('editorData', JSON.stringify(data?.blocks));
    }

    // recupera los datos del editor a partir de un json
    const load = async () => {
        const blocksStr = localStorage.getItem('editorData');
        const blocks = JSON.parse(blocksStr || '[]');
        console.log('load', blocks, editor)
        await editor?.render?.({ blocks });
    }

    useLayoutEffect(() => {
        if (!editor) return;
        editor.isReady.then(() => {
            load();
        });
    }, [editor]);

    const [story, setStory] = useState<Story>();

    // Provisional example story
    useEffect(() => {
        setStory(createStoryExample());
    }, []);

    console.log(editor);

    return (
        <main className={S.Editor}>
            <Header>
                <SaveAction />
                <PublishAction story={story} />
                <Button onClick={save}>Save</Button>
            </Header>

            <div>
                {/* <div id="editorjs">EDITOR</div> */}
                <div ref={editorContainer} />
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