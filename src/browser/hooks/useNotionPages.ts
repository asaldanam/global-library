import { mutator } from '@/browser/lib/mutator';
import { useNotionAuth } from './useNotionAuth';
import useSWRMutation from 'swr/mutation';

export function useNotion() {
    const { auth } = useNotionAuth();

    const search = useSWRMutation(
        'https://api.notion.com/v1/search',
        mutator({
            method: 'POST',
            headers: { Authorization: `Bearer ${auth?.access_token}` }
        })
    );

    async function searchPages(query: string) {
        const { results } = await search.trigger({
            query,
            filter: {
                value: 'page',
                property: 'object'
            },
            sort: {
                direction: 'ascending',
                timestamp: 'last_edited_time'
            }
        });

        return results;
    }

    return { auth, searchPages };
}

const notionUrl = 'https://api.notion.com';

export async function notionMutator(url: string, params: { arg: any }) {
    return fetch(notionUrl + url, { method: 'POST', body: JSON.stringify(params.arg) }).then((res) => res.json());
}
