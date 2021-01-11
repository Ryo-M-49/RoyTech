import React from 'react';
import Book from 'components/about/Book';
import { Book as IBook } from 'interfaces/bookProps';

interface Props {
    books: IBook[];
}

const CurrentlyReading: React.FC<Props> = ({ books }) => {
    return (
        <section className="m-8">
            <h1 className="w-full my-2 text-4xl font-bold leading-tight text-gray-800">
                Currently Reading
            </h1>
            <div className="w-full mb-4">
                <div className="bg-blue-600 h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
                {books.map((book, key) => {
                    return (
                        <div
                            className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
                            key={key}
                        >
                            <Book fields={book.fields} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CurrentlyReading;
