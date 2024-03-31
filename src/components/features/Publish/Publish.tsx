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
import { Publication, Story } from '@/core/story';
import { mutator } from '@/lib/mutator';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import FormAuthorField from './components/FormAuthorField';
import FormCoverField from './components/FormCoverField';
import FormLanguageField from './components/FormLanguageField';
import PublishLoading from './components/PublishLoading';
import PublishResult from './components/PublishResult';

type PublishProps = {
    story: Story;
};

const Publish = (props: PropsWithChildren<PublishProps>) => {
    const { story, children } = props;
    const form = useForm<Story>({ values: story });

    const publish = useSWRMutation('/api/publish', mutator({ method: 'POST' }));

    const onSubmit = (data: Story) => {
        publish.trigger(data);
    };

    if (publish.isMutating) return <PublishLoading />;
    if (publish.data) return <PublishResult publication={publish.data as Publication} />;

    return (
        <Form {...form}>
            <PublishDialogHeader />

            <form className="mt-1 flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormCoverField />
                <FormAuthorField />
                <div className="flex gap-3">
                    <FormLanguageField className="w-full" />
                    <FormLanguageField className="w-full" />
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
