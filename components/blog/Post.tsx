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
    let component = (
        <div className="h-96 rounded overflow-hidden shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white">
            <img
                className="w-full object-cover h-40"
                src={`https:${fields.coverImage.fields.file.url}`}
                alt={fields.coverImage.fields.title}
            />
            <div className="px-6 py-4">
                <div data-testid="title" className="font-bold text-xl mb-1">
                    {fields.title.length > MAX_TITLE_LENGTH
                        ? fields.title.substr(0, MAX_TITLE_LENGTH) + '...'
                        : fields.title}
                </div>
                <p className="font-thin mb-1">{fields.date.substr(0, 10)}</p>
                <p data-testid="content" className="text-gray-700 text-base">
                    {fields.description.length > MAX_DESCRIPTION_LENGTH
                        ? fields.description.substr(0, MAX_DESCRIPTION_LENGTH) +
                          '...'
                        : fields.description}
                </p>
            </div>
        </div>
    );

    if (isTopPost) {
        component = (
            <div className="md:flex xs:h-96 md:h-80 rounded overflow-hidden shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white">
                <img
                    className="object-cover md:w-1/2"
                    src={`https:${fields.coverImage.fields.file.url}`}
                    alt={fields.coverImage.fields.title}
                />
                <div className="px-6 py-4">
                    <h2 data-testid="title" className="font-bold text-xl mb-1">
                        {fields.title.length > MAX_TOP_TITLE_LENGTH
                            ? fields.title.substr(0, MAX_TOP_TITLE_LENGTH) +
                              '...'
                            : fields.title}
                    </h2>
                    <p className="font-thin mb-1">
                        {fields.date.substr(0, 10)}
                    </p>
                    <p
                        data-testid="content"
                        className="text-gray-700 text-base"
                    >
                        {fields.description.length > MAX_TOP_DESCRIPTION_LENGTH
                            ? fields.description.substr(
                                  0,
                                  MAX_TOP_DESCRIPTION_LENGTH
                              ) + '...'
                            : fields.description}
                    </p>
                </div>
            </div>
        );
    }

    return <>{component}</>;
};

export default Post;
