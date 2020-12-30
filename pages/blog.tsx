import Link from 'next/link';
import { GetStaticProps } from 'next';
import PageLayout from 'components/layouts/PageLayout';
import Post from 'components/blog/Post';
import { Props } from 'interfaces/blogProps';
import { getAllPosts } from 'lib/api';

const Blog: React.FC<Props> = ({ posts }) => {
    return (
        <PageLayout>
            <div className="flex flex-wrap justify-center -mr-5">
                {posts.map((post, key) => (
                    <Link
                        key={key}
                        href="/blog/[slug]"
                        as={`/blog/${String(post.fields.slug)}`}
                    >
                        <div className="mt-5 mr-5">
                            <Post fields={post.fields} />
                        </div>
                    </Link>
                ))}
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
