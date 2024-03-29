import { mutator } from '@/lib/mutator';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';

export function useNotionAuth() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const [auth, setAuth] = useState<NotionAuth | null>();

    const { trigger } = useSWRMutation('/api/import/notion/auth', mutator({ method: 'POST' }));

    useEffect(() => {
        if (auth !== null) return;
        if (!code) return;

        trigger({ code })
            .then(setAuth)
            .catch(() => setAuth(null));
    }, [code, trigger, auth]);

    useEffect(() => {
        if (auth) localStorage.setItem('notion_token', JSON.stringify(auth));
    }, [auth]);

    useEffect(() => {
        try {
            const auth = localStorage.getItem('notion_token');
            if (!auth) throw new Error('No token found in local storage.');
            setAuth(JSON.parse(auth));
        } catch (error) {
            setAuth(null);
        }
    }, []);

    return { auth };
}

interface NotionAuth {
    access_token: string;
    token_type: string;
    bot_id: string;
    workspace_name: string;
    workspace_icon: string;
    workspace_id: string;
    owner: Owner;
    duplicated_template_id?: any;
    request_id: string;
}

interface Owner {
    type: string;
    user: User;
}

interface User {
    object: string;
    id: string;
}
