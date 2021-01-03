import React from 'react';
import { Post as IPost } from 'interfaces/blogProps';
import { MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH } from 'lib/config';

const Post: React.FC<IPost> = ({ fields }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
            <img
                className="w-full"
                src="https://source.unsplash.com/random/1600x900/"
                alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
                <div data-testid="title" className="font-bold text-xl mb-2">
                    {fields.title.length > MAX_TITLE_LENGTH
                        ? fields.title.substr(0, MAX_TITLE_LENGTH) + '...'
                        : fields.title}
                </div>
                <p data-testid="content" className="text-gray-700 text-base">
                    {fields.description.length > MAX_DESCRIPTION_LENGTH
                        ? fields.description.substr(0, MAX_DESCRIPTION_LENGTH) +
                          '...'
                        : fields.description}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                </span>
            </div>
        </div>
    );
};

export default Post;
