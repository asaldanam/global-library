'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Header from '@/components/sdk/Header';
import { Story } from '@/core/story/domain';
import { createStoryExample } from '@/mocks/story/createStoryExample';
import S from './Editor.module.css';
import PublishAction from './components/PublishAction';
import SaveAction from './components/SaveAction';

import EditorJS, { OutputData } from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
// import configuration from './editorjsConfig';
import { Button } from '@/components/ui/button';
import SideBar from '@/components/sdk/SideBar';
import Link from "next/link"
import { Book, Package2 } from 'lucide-react';

export type Stories = { [uuid: string]: OutputData }

const Editor = () => {
    const editorContainer = useRef(null);
    const [editor, setEditor] = useState<EditorJS>();
    // const [stories, setStories] = useState();
    const [stories, setStories] = useState<Stories>({});

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

                // onReady: () => {

                // },
                // onChange: (...args) => {
                //     console.log('Editor.js is changed!', args);
                // }
            });

            setEditor(editorInstance);
        };

        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, []);

    const saveStory = async () => {
        const data = await editor?.save?.();
        const storyId = crypto.randomUUID();

        const stories = JSON.parse(localStorage.getItem('stories') || '{}');
        const updatedStories = { ...stories, [storyId]: { blocks: data?.blocks } };

        localStorage.setItem('stories', JSON.stringify(updatedStories));
        setStories(updatedStories);
    };

    // recupera los datos del editor a partir de un json
    const loadStory = async (storyId: string) => {
        const blocksStr = localStorage.getItem(`editorData_${storyId}`);
        const blocks = JSON.parse(blocksStr || '[]');
        await editor?.render?.({ blocks });
    };

    const getFirstParagraphText = (blocks: any[]) => {
        const firstParagraph = blocks.find(block => block.type === 'paragraph');
        return firstParagraph?.data?.text || 'Untitled Story';
    };

    useLayoutEffect(() => {
        if (!editor) return;
        editor.isReady.then(() => {
            const storyId = Object.keys(stories)[0];
            loadStory(storyId);

            const storaged = JSON.parse(localStorage.getItem('stories') || '{}');
            setStories(storaged);
        });
    }, [editor]);

    const [story, setStory] = useState<Story>();

    // Provisional example story
    // useEffect(() => {
    //     setStory(createStoryExample());
    // }, []);

    console.log(stories);


    return (
        <main className={S.Editor}>
            <Header>
                <SaveAction />
                <PublishAction story={story} />
                <Button onClick={saveStory}>Save</Button>
            </Header>

            <SideBar title={
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Package2 className="h-6 w-6" />
                    <span className="">Nueva historia</span>
                </Link>
            }>
                {Object.entries(stories).map(([storyId, story]) => {
                    return (
                        <Link
                            key={storyId}
                            href={`#/${storyId}`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Book className="h-4 w-4" />
                            {(story.blocks || [])[0]?.data?.text || 'Untitled Story'}
                        </Link>
                    )
                })}

            </SideBar>

            <div>
                {/* <div id="editorjs">EDITOR</div> */}
                <div ref={editorContainer} />
            </div>

            {/* <div className="container flex max-w-screen-2xl items-center pt-6">
                <pre className="overflow-hidden text-ellipsis text-xs bg-muted p-3 rounded-lg">
                    {JSON.stringify(story, null, 1)}
                </pre>
            </div> */}
        </main>
    );
};

export default Editor;

// 1er render _< use Effect e inicializar useState
// 2º render -> useLayoutEffect xq ya se renderiza el html

//usar userLayoutEffect


//editorContainer.current, es como un document.getElementById('editorjs') pero con hooks