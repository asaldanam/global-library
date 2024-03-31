import { Publication } from '@/core/story/domain';

type PublishResultProps = {
    publication: Publication;
};

const PublishResult = (props: PublishResultProps) => {
    const { publication } = props;

    return (
        <>
            <div className="h-96 -m-6 grayscale" style={{ width: 'calc(100% + 3rem)' }}>
                <img src="/assets/pics/rocket.gif" className="w-full h-full object-cover object-center" />
            </div>
            <pre className="w-full overflow-hidden text-ellipsis text-xs bg-slate-50 p-3 text-xs">
                <div>Published!</div>
                <a
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-1 block"
                    href={`https://nftstorage.link/ipfs/${publication.path}`}
                    target="_blank"
                >
                    {publication.path}
                </a>
            </pre>
        </>
    );
};

export default PublishResult;
