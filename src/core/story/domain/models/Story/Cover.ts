import { z } from 'zod';

const validImageTypes = ['jpeg', 'png', 'webp', 'jpeg'];

const isValidCoverFile = (value: string) => {
    if (value.startsWith('data:image')) return true;
    if (value.startsWith('http')) return true;
    if (value.startsWith('ipfs')) return true;
    return false;
};

const isValidCoverImageType = (value: string) => {
    const validAsBase64 = validImageTypes.some((type) => value.startsWith('data:image/' + type));
    const validAsUrl = validImageTypes.some((type) => value.endsWith('.' + type));
    return validAsBase64 || validAsUrl;
};

export const Cover = z
    .string()
    .refine((value) => !!value, { message: 'A cover image is required' })
    .refine(isValidCoverFile, { message: 'Not a valid file type' })
    .refine(isValidCoverImageType, { message: `Only ${validImageTypes.join(', ')} are valid image types.` });

export type Cover = z.infer<typeof Cover>;
