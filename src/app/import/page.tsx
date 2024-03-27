import OnlyClient from '@/browser/utils/OnlyClient';
import Import from '@/components/features/Import';

export default function Page() {
    return (
        <OnlyClient>
            <Import />
        </OnlyClient>
    );
}
