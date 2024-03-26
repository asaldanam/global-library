'use client';

import { Button } from '@/browser/components/ui/button';
import { Input } from '@/browser/components/ui/input';
import { Label } from '@/browser/components/ui/label';
import { useNotion } from '@/browser/hooks/useNotionPages';

const NotionImportWizard = () => {
    const { auth, searchPages } = useNotion();

    return (
        <>
            <div className="NotionImportWizard">
                <a href={process.env.NEXT_PUBLIC_NOTION_AUTH_URL} target="_blank">
                    <Button>Conecta con Notion</Button>
                </a>

                {auth && (
                    <div>
                        <Label htmlFor="search">Buscar páginas</Label>
                        <Input id="search" type="text" onChange={(e) => searchPages(e.target.value)} />
                    </div>
                )}
            </div>
        </>
    );
};

export default NotionImportWizard;
