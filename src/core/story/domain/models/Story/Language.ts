import { z } from 'zod';

export const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' }
] as const;

const isValidLanguage = (value: any) => languages.map(({ value }) => value).includes(value as any);

export const Language = z
    .string()
    .refine((value) => !!value, { message: 'Language is required' })
    .refine(isValidLanguage, { message: 'Not a valid language' });

export type Language = z.infer<typeof Language>;
