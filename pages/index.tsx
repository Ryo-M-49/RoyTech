import React from 'react';
import { GetStaticProps } from 'next';
import { getLimitedPosts } from 'lib/api';
import { Post } from 'interfaces/blogProps';
import { HOME_POST_LIMIT } from 'lib/config';
import PageLayout from 'components/layouts/PageLayout';
import Top from 'components/home/Top';
import About from 'components/home/About';
import Work from 'components/home/Work';
import Blog from 'components/home/Blog';

interface Props {
    posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
    return (
        <PageLayout
            ogTitle="RyoM.net"
            ogPath=""
            ogType="website"
            ogImage="https://user-images.githubusercontent.com/57619070/104796298-4ec56f80-57f8-11eb-81bb-8ad6a2676c70.png"
        >
            <Top />
            <About />
            <Work />
            <Blog posts={posts} />
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getLimitedPosts(HOME_POST_LIMIT);
    return {
        props: {
            posts: posts ? posts : null,
        },
    };
};

export default Home;
