import React from 'react';
import { Post } from 'interfaces/blogProps';

const BlogPost: React.FC<Post> = ({ fields }) => {
    return (
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div className="flex flex-wrap no-underline hover:no-underline">
                <img
                    className="w-full object-cover h-40"
                    src={`https:${fields.coverImage.fields.file.url}`}
                    alt={fields.coverImage.fields.title}
                />
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-5">
                    {fields.title}
                </div>
                <p className="text-gray-800 text-base p-6">
                    {fields.description}
                </p>
            </div>
        </div>
    );
};

export default BlogPost;
