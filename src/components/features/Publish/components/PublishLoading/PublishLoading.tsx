import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PublishLoading = () => {
    return (
        <>
            <div className={`flex w-full flex-col items-center`}>
                <object data="/assets/pics/girl.svg" className="w-full h-auto grayscale-[85%]" type="image/svg+xml">
                    <img src="/assets/pics/girl.svg" />
                </object>
                <CardHeader className="text-center">
                    <CardTitle>Publishing</CardTitle>
                    <CardDescription>Your story is being published. Please wait a moment.</CardDescription>
                </CardHeader>
            </div>
        </>
    );
};

export default PublishLoading;
