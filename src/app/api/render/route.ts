import { storyPublisher } from '@/server/services';
import { NextRequest, NextResponse } from 'next/server';
import { htmlStoryRenderer } from '../../../components/features/Reader/utils/htmlStoryRenderer';
import { createStory } from '@/core';

/** /api/publish */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const story = createStory(body);

        const html = await htmlStoryRenderer(story);

        return Response.json({ html });
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
