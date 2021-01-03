import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostBySlug } from 'lib/api';
import { Post } from 'interfaces/blogProps';
import PageLayout from 'components/layouts/PageLayout';
import MarkdownText from 'components/blog/MarkdownText';

interface Props {
    coverImage: {
        file: string;
        title: string;
    };
    author: {
        image: {
            fields: string;
            title?: string;
        };
        name: string;
    };
    markdown: string;
    title: string;
}

const PostDetail: React.FC<Props> = ({ title, markdown }) => {
    return (
        <PageLayout>
            <h1>{title}</h1>
            <MarkdownText content={markdown} />
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
