import { storyPublisher } from '@/app/api/services';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const publication = await storyPublisher.publish(body);

    return NextResponse.json(publication);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
