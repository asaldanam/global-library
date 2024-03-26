import { mutator } from '@/lib/mutator';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { code } = await request.json();

        const username = process.env.NOTION_OAUTH_CLIENT_ID;
        const password = process.env.NOTION_OAUTH_CLIENT_SECRET;

        const response = await fetch('https://api.notion.com/v1/oauth/token', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'authorization_code',
                code,
                redirect_uri: 'https://global-library-theta.vercel.app'
            })
        });

        const auth = await response.json();

        return NextResponse.json(auth, { status: response.status });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
