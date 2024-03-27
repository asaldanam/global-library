import Editor from '@/components/features/Editor';
import OnlyClient from '@/browser/utils/OnlyClient';

export default function Page() {
    return (
        <OnlyClient>
            <Editor />
        </OnlyClient>
    );
}
