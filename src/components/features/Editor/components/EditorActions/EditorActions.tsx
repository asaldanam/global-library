import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

const EditorActions = () => {
    return (
        <>
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <span className="sr-only">Actions</span>
                        <DotsHorizontalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => {}}>Content filter preferences</DropdownMenuItem>
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu> */}
            <Button size="sm" variant="ghost">
                Save
            </Button>
        </>
    );
};

export default EditorActions;
