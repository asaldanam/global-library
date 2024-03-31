'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { mutator } from '@/lib/mutator';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import AuthorField from './components/AuthorField';
import CoverField from './components/CoverField';
import LanguageField from './components/LanguageField';
import PublishLoading from './components/PublishLoading';
import PublishResult from './components/PublishResult';
import { Publication, Story } from '@/core/story/domain';
import CategoryField from './components/CategoryField';

type PublishProps = {
    story: Story;
};

const Publish = (props: PropsWithChildren<PublishProps>) => {
    const { story, children } = props;
    const form = useForm<Story>({ values: story });

    const publish = useSWRMutation('/api/publish', mutator({ method: 'POST' }));

    const onSubmit = (data: Story) => {
        publish.trigger({ id: 'asdfasdf' });
    };

    if (publish.isMutating) return <PublishLoading />;
    if (publish.data) return <PublishResult publication={publish.data as Publication} />;

    return (
        <Form {...form}>
            <form className="mt-1 flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                <PublishDialogHeader />

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

const PublishDialogHeader = () => (
    <DialogHeader>
        <DialogTitle>Publish your story</DialogTitle>
        <DialogDescription>
            Your story will be published on{' '}
            <Link href="https://ipfs.tech/" target="_blank">
                IPFS
            </Link>
            , the interplanetary file storage platform where it will remain forever.
            <Link href="/faq#what-means-forever" target="_blank">
                <InfoCircledIcon width={14} height={14} className="ml-1 inline" />
            </Link>
        </DialogDescription>
    </DialogHeader>
);

const PublishDialog = (props: PropsWithChildren<Partial<PublishProps>>) => {
    const { story, children } = props;

    if (!story || !children) return null;

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-lg">
                <Publish story={story} />
            </DialogContent>
        </Dialog>
    );
};

export default PublishDialog;
