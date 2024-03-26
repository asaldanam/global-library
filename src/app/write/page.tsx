import StoryEditor from '@/browser/components/features/StoryEditor';
import OnlyClient from '@/browser/utils/OnlyClient';

export default function Page() {
    return (
        <OnlyClient>
            <StoryEditor />
        </OnlyClient>
    );
}
