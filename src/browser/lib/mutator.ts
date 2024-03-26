export function mutator(options?: RequestInit) {
    return async (url: string, params: { arg: any }) => {
        const fetchOptions = {
            method: 'PUT',
            ...(options || {}),
            body: JSON.stringify(params.arg)
        };

        const response = await fetch(url, fetchOptions);

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || response.statusText);

        return data;
    };
}
