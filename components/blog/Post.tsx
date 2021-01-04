import React from 'react';
import { Post as IPost } from 'interfaces/blogProps';
import {
    MAX_TITLE_LENGTH,
    MAX_DESCRIPTION_LENGTH,
    MAX_TOP_TITLE_LENGTH,
    MAX_TOP_DESCRIPTION_LENGTH,
} from 'lib/config';

interface Props extends IPost {
    isTopPost: boolean;
}

const Post: React.FC<Props> = ({ fields, isTopPost }) => {
    const maxTitleLength = isTopPost ? MAX_TOP_TITLE_LENGTH : MAX_TITLE_LENGTH;
    const maxDescriptionLength = isTopPost
        ? MAX_TOP_DESCRIPTION_LENGTH
        : MAX_DESCRIPTION_LENGTH;
    return (
        <div className="rounded overflow-hidden shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white">
            <img
                className={`w-full object-cover ${isTopPost ? 'h-60' : 'h-40'}`}
                src={`https:${fields.coverImage.fields.file.url}`}
                alt={fields.coverImage.fields.title}
            ></img>
            <div className="px-6 py-4">
                <div data-testid="title" className="font-bold text-xl mb-2">
                    {fields.title.length > maxTitleLength
                        ? fields.title.substr(0, maxTitleLength) + '...'
                        : fields.title}
                </div>
                <p data-testid="content" className="text-gray-700 text-base">
                    {fields.description.length > maxDescriptionLength
                        ? fields.description.substr(0, maxDescriptionLength) +
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
