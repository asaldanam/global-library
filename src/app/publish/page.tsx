import Publish from '@/components/features/Publish';
import OnlyClient from '@/browser/utils/OnlyClient';

/** /publish */
export default function Page() {
    return (
        <OnlyClient>
            <Publish />
        </OnlyClient>
    );
}
