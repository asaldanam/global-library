import PublishWizard from '@/browser/components/features/PublishWizard';
import OnlyClient from '@/browser/utils/OnlyClient';

/** /publish */
export default function Page() {
    return (
        <OnlyClient>
            <PublishWizard />
        </OnlyClient>
    );
}
