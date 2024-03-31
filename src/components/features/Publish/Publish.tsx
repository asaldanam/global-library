'use client';

import { PropsWithChildren } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Publication, Story, createPublication } from '@/core/story/domain';
import AuthorField from './components/AuthorField';
import CategoryField from './components/CategoryField';
import CoverField from './components/CoverField';
import LanguageField from './components/LanguageField';
import PublishHeader from './components/PublishHeader';
import PublishLoading from './components/PublishLoading';
import PublishResult from './components/PublishResult';
import { usePublishForm } from './hooks/usePublishForm';

export type PublishProps = {
    story: Story;
};

const Publish = (props: PublishProps) => {
    const { form, publish, onSubmit } = usePublishForm(props);

    if (publish.isMutating) return <PublishLoading />;
    if (publish.data) return <PublishResult publication={createPublication(publish.data)} />;

    return (
        <Form {...form}>
            <PublishHeader />

            <form className="mt-1 flex flex-col gap-5" onSubmit={onSubmit}>
                <CoverField />
                <AuthorField />
                <div className="flex gap-3">
                    <CategoryField className="w-full" />
                    <LanguageField className="w-full" />
                </div>

                <footer className="mt-3 w-full flex justify-end gap-5">
                    <Button type="submit">Publish</Button>
                </footer>
            </form>
        </Form>
    );
};

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default (props: PropsWithChildren<PublishProps>) => {
    if (!props.story || !props.children) return null;

    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>

            <DialogContent className="max-w-lg">
                <Publish {...props} />
            </DialogContent>
        </Dialog>
    );
};
