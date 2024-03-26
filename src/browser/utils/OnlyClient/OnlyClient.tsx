'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

const OnlyClient = (props: PropsWithChildren) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return props.children;
};

export default OnlyClient;
