'use client';

import { fetcher } from '@/browser/lib/fetcher';
import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export function SWRProvider(props: PropsWithChildren) {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher
            }}
        >
            {props.children}
        </SWRConfig>
    );
}
