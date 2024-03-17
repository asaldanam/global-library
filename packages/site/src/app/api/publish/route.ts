import { storyPublisherService } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const publication = await storyPublisherService.publish(body);

  return NextResponse.json(publication);
}
