import { useFormContext } from 'react-hook-form';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Cover, Story } from '@/core/story/domain';

const CoverField = () => {
    const form = useFormContext<Story>();

    return (
        <>
            <FormField
                control={form.control}
                name="meta.cover"
                render={({ field: { onChange, value, ...field } }) => {
                    return (
                        <FormItem>
                            <FormLabel>Cover image</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    placeholder="Add a cover"
                                    {...field}
                                    onChange={(e) => {
                                        const files = e.target.files;
                                        const file = files && files[0];
                                        if (!file) return;

                                        var reader = new FileReader();
                                        reader.readAsDataURL(file);
                                        reader.onload = () => onChange(reader.result);
                                        reader.onerror = (error) => onChange(null);
                                    }}
                                />
                            </FormControl>

                            <div>
                                {Cover.safeParse(value).success && (
                                    <AspectRatio ratio={120 / 63}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={value}
                                            className="absolute rounded-md w-full h-full object-cover object-center"
                                            alt="cover"
                                            onError={(e) => e.currentTarget.setAttribute('style', 'display: none')}
                                        />
                                    </AspectRatio>
                                )}
                            </div>

                            <FormDescription>An awesome image your story more attractive</FormDescription>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />
        </>
    );
};

export default CoverField;
