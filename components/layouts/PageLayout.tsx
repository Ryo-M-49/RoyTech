import Head from 'next/head';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';

type Props = {
    className?: string;
};

const PageLayout: React.FC<Props> = ({ children, className}) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>RoyTech.com</title>
            </Head>
            <body className="flex flex-col h-screen w-full">
                <Header />
                <div className={`flex-1 overflow-y-auto p-5 page-wrapper ${className}`}>{children}</div>
                <Footer />
            </body>
        </>
    );
};

export default PageLayout;
