import React from 'react';

interface Props {
    author: {
        image: {
            fields: {
                file: {
                    url: string;
                };
                title: string;
            };
        };
        name: string;
    };
    date: string;
}

const Author: React.FC<Props> = ({ author, date }) => {
    return (
        <div className="flex items-center">
            <img
                src={`https:${author.image.fields.file.url}`}
                alt="author"
                className="shadow rounded-full w-10 h-auto align-middle border-none"
            />
            <div className="ml-3">
                <p>{author.name}</p>
                <p>Date: {date.substr(0, 10)}</p>
            </div>
        </div>
    );
};

export default Author;
