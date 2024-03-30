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

export const Languages = z.enum(languages.map(({ value }) => value) as [(typeof languages)[number]['value']]);

export type Languages = z.infer<typeof Languages>;

export const createLanguages = (languages: Languages) => Languages.parse(languages);
