import { publisher } from '@/server/services/story/publisher';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const publication = await publisher.publish(body);

        return NextResponse.json(publication);
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
