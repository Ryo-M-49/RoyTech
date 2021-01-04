import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Post as IPost } from 'interfaces/blogProps';
import PageLayout from 'components/layouts/PageLayout';
import Post from 'components/blog/Post';
import { getAllPosts } from 'lib/api';

interface Props {
    posts: IPost[];
}

const Blog: React.FC<Props> = ({ posts }) => {
    const style = {
        backgroundImage: `url('/blog.jpg')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
    let isTopPost = false;
    return (
        <PageLayout>
            <div
                className="w-full h-52 bg-gray-100 flex flex-col items-center justify-center"
                style={style}
            >
                <h1 className="text-5xl tracking-widest mb-3 text-white text-shadow">
                    BLOG
                </h1>
                <p className=" text-white text-shadow">
                    Life with engineering and technology.
                </p>
            </div>
            <div className="mx-5">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto p-3">
                    {posts.map((post, key) => {
                        {
                            key == 0 ? (isTopPost = true) : (isTopPost = false);
                        }
                        return (
                            <Link
                                key={key}
                                href="/blog/[slug]"
                                as={`/blog/${String(post.fields.slug)}`}
                            >
                                <div
                                    className={`mt-5 ${
                                        key == 0
                                            ? 'sm:col-span-2 lg:col-span-3'
                                            : ''
                                    }`}
                                >
                                    <Post
                                        fields={post.fields}
                                        isTopPost={isTopPost}
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts();
    return {
        props: {
            posts: posts ? posts : null,
        },
    };
};

export default Blog;
