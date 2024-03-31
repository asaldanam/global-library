import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { zodResolver } from '@hookform/resolvers/zod';

import { Story, createStory } from '@/core/story/domain';
import { mutator } from '@/lib/mutator';
import { PublishProps } from '../Publish';

export const usePublishForm = ({ story }: PublishProps) => {
    const publish = useSWRMutation('/api/publish', mutator({ method: 'POST' }));

    const form = useForm<Partial<Story>>({
        resolver: zodResolver(Story),
        defaultValues: {
            ...story,
            meta: {
                ...story.meta,
                author: story.meta.author || '',
                category: story.meta.category || '',
                language: story.meta.language || getBrowserLanguage() || 'en',
                createdAt: story.meta.createdAt || new Date().toISOString()
            }
        }
    });

    const onSubmit = form.handleSubmit((data: any) => {
        const story = createStory(data);
        publish.trigger(story);
    });

    return { form, publish, onSubmit };
};

const getBrowserLanguage = () => navigator.language.split('-')[0];
