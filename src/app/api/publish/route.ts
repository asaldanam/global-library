import { storyPublisher } from '@/server/services';
import { NextRequest, NextResponse } from 'next/server';

/** /api/publish */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const publication = await storyPublisher.publish(body);

        return NextResponse.json(publication);
    } catch (e) {
        const error = e as Error;
        return NextResponse.json(
            {
                error,
                description: error.message,
                stack: JSON.parse(JSON.stringify(error.stack)).split('\n    ')
            },
            { status: 500 }
        );
    }
}
