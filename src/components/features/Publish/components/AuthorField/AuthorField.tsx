import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

const AuthorField = () => {
    const form = useFormContext();
    return (
        <FormField
            control={form.control}
            name="meta.author.name"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                        <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormDescription>Leave it empty to publish anonymously</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default AuthorField;
