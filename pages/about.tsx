import React from 'react';
import { GetStaticProps } from 'next';
import { getLimitedBooks } from 'lib/api';
import { BOOK_LIMIT } from 'lib/config';
import { Book } from 'interfaces/bookProps';
import PageLayout from 'components/layouts/PageLayout';
import Top from 'components/about/Top';
import Skills from 'components/about/Skills';
import Qualifications from 'components/about/Qualifications';
import History from 'components/about/History';
import CurrentlyReading from 'components/about/CurrentlyReading';
import Sns from 'components/about/Sns';

interface Props {
    books: Book[];
}

const About: React.FC<Props> = ({ books }) => {
    return (
        <PageLayout ogTitle="About" ogPath="/about">
            <div className="w-full md:max-w-5xl md:mx-auto">
                <Top />
                <Skills />
                <Qualifications />
                <History />
                <CurrentlyReading books={books} />
                <Sns />
            </div>
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const books = await getLimitedBooks(BOOK_LIMIT);
    return {
        props: {
            books: books ? books : null,
        },
    };
};

export default About;
