import React from 'react';
import Link from 'next/link';
import { Post } from 'interfaces/blogProps';
import BlogPost from './BlogPost';

interface Props {
    posts: Post[];
}

const Blog: React.FC<Props> = ({ posts }) => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    Blog
                </h1>
                <div className="w-full mb-4">
                    <div className="bg-blue-600 h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                {posts.map((post, key) => {
                    return (
                        <Link
                            key={key}
                            href="/blog/[slug]"
                            as={`/blog/${String(post.fields.slug)}`}
                        >
                            <a className="w-full md:w-1/2 lg:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                <BlogPost fields={post.fields} />
                            </a>
                        </Link>
                    );
                })}
            </div>
            <div className="flex items-center justify-center">
                <div className="mx-auto lg:mx-0 hover:underline gradient bg-blue-600 hover:bg-blue-400 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
                    <Link href="/blog">
                        <a className="px-5 py-1 ml-2 text-white">Go to Blog</a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
