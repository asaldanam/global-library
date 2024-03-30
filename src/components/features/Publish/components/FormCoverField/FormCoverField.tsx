import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Story } from '@/core/story';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

const FormCoverField = () => {
    const form = useFormContext<Story>();

    return (
        <>
            <FormField
                control={form.control}
                name="cover"
                render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                        <FormLabel>Add a cover</FormLabel>
                        <FormControl>
                            <Input
                                type="file"
                                accept="image/png, image/gif, image/jpeg"
                                placeholder="Add a cover"
                                {...field}
                                onChange={(e) => {
                                    const files = e.target.files;
                                    const file = files && files[0];
                                    if (!file) return;

                                    var reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onload = function () {
                                        onChange(reader.result);
                                        console.log(reader.result);
                                    };
                                    reader.onerror = function (error) {
                                        console.log('Error: ', error);
                                    };
                                }}
                            />
                        </FormControl>
                        {value && (
                            <AspectRatio ratio={16 / 9} className="bg-muted">
                                <Image src={value} alt="cover" fill className="rounded-md object-cover" />
                            </AspectRatio>
                        )}
                        <FormDescription>An awesome image your story more attractive</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

export default FormCoverField;
