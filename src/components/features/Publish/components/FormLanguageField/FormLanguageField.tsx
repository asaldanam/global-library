import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { languages } from '@/core/story';
import { useFormContext } from 'react-hook-form';

const FormLanguageField = (props: { className?: string }) => {
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name="meta.lang"
            render={({ field }) => (
                <FormItem className={props.className}>
                    <FormLabel>Language</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {languages.map((language) => (
                                <SelectItem key={language.value} value={language.value}>
                                    {language.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {/* <FormDescription>
                        This will help readers find your story in their preferred language.
                    </FormDescription> */}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormLanguageField;
