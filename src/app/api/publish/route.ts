import { storyPublisher } from '@/app/api/services';
import { NextRequest, NextResponse } from 'next/server';

// export async function PUT(request: NextRequest) {
//     try {
//         const body = await request.json();
//         const publication = await storyPublisher.publish(body);

//         return NextResponse.json(publication);
//     } catch (e) {
//         const error = e as Error;
//         return NextResponse.json(
//             {
//                 error,
//                 description: error.message,
//                 stack: JSON.parse(JSON.stringify(error.stack)).split('\n    ')
//             },
//             { status: 500 }
//         );
//     }
// }

// export const PUT = async (request: NextRequest) => {
//     try {
//         const body = await request.json();
//         const publication = await storyPublisher.publish(body);

//         return NextResponse.json(publication);
//     } catch (e) {
//         const error = e as Error;
//         return NextResponse.json(
//             {
//                 error,
//                 description: error.message,
//                 stack: JSON.parse(JSON.stringify(error.stack)).split('\n    ')
//             },
//             { status: 500 }
//         );
//     }
// };

export const PUT = (request: Request) =>
    ErrorHandler(async () => {
        const body = await request.json();
        const publication = await storyPublisher.publish(body);

        return NextResponse.json(publication);
    });

async function ErrorHandler(controller: () => Promise<Response>) {
    try {
        return controller();
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
