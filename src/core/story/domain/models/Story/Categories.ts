import { z } from 'zod';

export const categories = [
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'scifi', label: 'Science Fiction' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'romance', label: 'Romance' },
    { value: 'horror', label: 'Horror' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'historical', label: 'Historical Fiction' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' },
    { value: 'dystopian', label: 'Dystopian' },
    { value: 'supernatural', label: 'Supernatural' },
    { value: 'cyberpunk', label: 'Cyberpunk' },
    { value: 'postapocalyptic', label: 'Post-Apocalyptic' },
    { value: 'alternatehistory', label: 'Alternate History' },
    { value: 'steampunk', label: 'Steampunk' },
    { value: 'fairytale', label: 'Fairy Tale' },
    { value: 'mythology', label: 'Mythology' },
    { value: 'superhero', label: 'Superhero' },
    { value: 'martialarts', label: 'Martial Arts' },
    { value: 'sports', label: 'Sports' },
    { value: 'sliceoflife', label: 'Slice of Life' },
    { value: 'western', label: 'Western' },
    { value: 'erotica', label: 'Erotica' },
    { value: 'poetry', label: 'Poetry' },
    { value: 'wuxia', label: 'Wuxia' }
] as const;

export const Categories = z.enum(categories.map(({ value }) => value) as [(typeof categories)[number]['value']]);

export type Categories = z.infer<typeof Categories>;

export const createCategories = (languages: Categories) => Categories.parse(languages);
