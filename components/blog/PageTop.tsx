import React from 'react';

interface Props {
    coverImage: {
        file: {
            contentType: string;
            details: {
                image: {
                    width: number;
                    height: number;
                };
                size: number;
            };
            fileName: string;
            url: string;
        };
        title: string;
    };
    title: string;
}

const PageTop: React.FC<Props> = ({ coverImage, title }) => {
    const style = {
        backgroundImage: `url('https:${coverImage.file.url}')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="flex h-80 items-center" style={style}>
            <div className="bg-black opacity-75 py-3 w-full">
                <h1 className="text-center text-3xl md:text-5xl text-white w-full">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default PageTop;
