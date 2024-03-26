import { storyPublisher } from '@/server/services';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const publication = await storyPublisher.publish(body);

        return NextResponse.json(publication);
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
