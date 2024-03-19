import NotionImportWizard from '@/components/features/NotionImportWizard';
import PublishWizard from '@/components/features/PublishWizard';

export default function Home() {
  return (
    <main className="flex flex-col items-center h-dvh">
      <PublishWizard />
      <NotionImportWizard />
    </main>
  );
}
