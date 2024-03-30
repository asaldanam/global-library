const PublishLoading = () => {
    return (
        <>
            <div className={`flex w-full flex-col items-center pb-3`}>
                <object data="/assets/pics/girl.svg" className="w-full h-auto grayscale-[85%]" type="image/svg+xml">
                    <img src="/assets/pics/girl.svg" />
                </object>
                <p className="mt-3">Now publishing, wait a moment...</p>
            </div>
        </>
    );
};

export default PublishLoading;
