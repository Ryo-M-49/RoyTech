import Markdown from 'markdown-to-jsx';
import React, { useEffect } from 'react';
import Prism from 'prismjs';

interface Props {
    content: string;
}

const options = {
    overrides: {
        h1: {
            props: {
                className: 'inline-block text-4xl my-6',
            },
        },
        h2: {
            props: {
                className: 'inline-block text-3xl my-4',
            },
        },
        h3: {
            props: {
                className: 'inline-block text-2xl my-4',
            },
        },
        h4: {
            props: {
                className: 'inline-block text-xl my-2',
            },
        },
        h5: {
            props: {
                className: 'inline-block text-xl my-2',
            },
        },
        h6: {
            props: {
                className: 'inline-block text-xl my-2',
            },
        },
        ul: {
            props: {
                className: 'list-disc list-inside my-3',
            },
        },
        img: {
            props: {
                className: 'my-5',
            },
        },
        a: {
            props: {
                className: 'text-blue-600',
                target: '_blank',
                rel: 'noreferrer noopener',
            },
        },
        blockquote: {
            props: {
                className:
                    'border-l-4 border-blue-600 italic my-4 pl-4 md:pl-12',
            },
        },
    },
};

const MarkdownText: React.FC<Props> = ({ content }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="text-gray-700 leading-7">
            <Markdown className="prose" options={options}>
                {content}
            </Markdown>
        </div>
    );
};

export default MarkdownText;
