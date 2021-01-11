import React from 'react';
import { Book as IBook } from 'interfaces/bookProps';

const Book: React.FC<IBook> = ({ fields }) => {
    return (
        <>
            <img
                className="w-full object-contain h-64 md:h-52"
                src={`https:${fields.coverImage.fields.file.url}`}
                alt={fields.coverImage.fields.title}
            />
            <div className="w-full text-sm text-gray-800 px-6 mt-5 text-center">
                {fields.author.fields.name}
            </div>
        </>
    );
};

export default Book;
