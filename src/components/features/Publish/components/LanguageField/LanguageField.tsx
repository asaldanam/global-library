import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Story, languages } from '@/core/story/domain';

const LanguageField = (props: { className?: string }) => {
    const form = useFormContext<Story>();

    return (
        <FormField
            control={form.control}
            name="meta.language"
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
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default LanguageField;
