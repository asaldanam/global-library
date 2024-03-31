import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { zodResolver } from '@hookform/resolvers/zod';

import { Story, createStory } from '@/core/story/domain';
import { mutator } from '@/lib/mutator';
import { PublishProps } from '../Publish';

export const usePublishForm = (props: PublishProps) => {
    const publish = useSWRMutation('/api/publish', mutator({ method: 'POST' }));

    const form = useForm({
        resolver: zodResolver(Story),
        defaultValues: {
            ...props.story,
            meta: {
                ...props.story.meta,
                author: '',
                category: '',
                lang: navigator.language.split('-')[0]
            }
        }
    });

    const onSubmit = form.handleSubmit((data: any) => {
        const story = createStory(data);
        publish.trigger(story);
    });

    return { form, publish, onSubmit };
};
