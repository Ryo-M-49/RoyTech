import { getAllPosts, getPostBySlug } from 'lib/api';
import { Post } from 'interfaces/blogProps';
import PageLayout from 'components/layouts/PageLayout';

interface Params {
  params: {
    slug: string
  }
}

interface PostDetail {
  coverImage: {
    file: string,
    title: string
  },
  author: {
    image: {
      fields: string,
      title?: string
    },
    name: string
  },
  title: string,
}

const PostDetail: React.FC<PostDetail> = ({ coverImage, author, title }) => {

  return (
    <PageLayout>
      {/* {/* <h1>{props.fields.title}</h1> */}
      <h1>{title}</h1>
    </PageLayout>
  );
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      coverImage: post.fields.coverImage.fields,
      author: post.fields.author.fields,
      title: post.fields.title,
      contents: post.fields.content.content
    }
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts?.map((post: Post) => {
      return {
          params: {slug: post.fields.slug}
      }
  })
  return {
      paths,
      fallback: false
  }
}

export default PostDetail;