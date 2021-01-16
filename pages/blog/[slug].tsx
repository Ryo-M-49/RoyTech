import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostBySlug } from 'lib/api';
import { Post } from 'interfaces/blogProps';
import PageLayout from 'components/layouts/PageLayout';
import PageTop from 'components/blog/PageTop';
import Author from 'components/blog/Author';
import MarkdownText from 'components/blog/MarkdownText';

interface Props {
    coverImage: {
        file: {
            contentType: string;
            details: {
                image: {
                    width: number;
                    height: number;
                };
                size: number;
            };
            fileName: string;
            url: string;
        };
        title: string;
    };
    author: {
        image: {
            fields: {
                file: {
                    url: string;
                };
                title: string;
            };
        };
        name: string;
    };
    markdown: string;
    title: string;
    date: string;
    slug: string;
}

const PostDetail: React.FC<Props> = ({
    coverImage,
    author,
    markdown,
    title,
    date,
    slug,
}) => {
    return (
        <PageLayout
            ogTitle={title}
            ogPath={`/blog/${slug}`}
            ogType="article"
            ogImage={`https://${coverImage.file.url}`}
        >
            <div className="md:w-3/4 mx-auto mb-10">
                <PageTop coverImage={coverImage} title={title} />
                <div className="md:w-3/4 px-3 md:mx-auto">
                    <div className="mt-5">
                        <Author author={author} date={date} />
                    </div>
                    <MarkdownText content={markdown} />
                </div>
            </div>
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const post = await getPostBySlug(params.slug);
    return {
        props: {
            coverImage: post.fields.coverImage.fields,
            author: post.fields.author.fields,
            title: post.fields.title,
            markdown: post.fields.markdown,
            date: post.fields.date,
            slug: params.slug,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    const paths = posts?.map((post: Post) => {
        return {
            params: { slug: post.fields.slug },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export default PostDetail;
