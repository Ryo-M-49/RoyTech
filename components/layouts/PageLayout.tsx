import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

type Props = {
    className?: string;
    ogTitle?: string;
    ogImage?: string;
    ogPath?: string;
};

const PageLayout: React.FC<Props> = ({
    children,
    className,
    ogTitle,
    ogPath,
    // ogImage,
}) => {
    const image = `https://ogi-api.vercel.app/${ogTitle}.png?theme=black&md=1&fontSize=130px&background=https://user-images.githubusercontent.com/57619070/104796316-8502ef00-57f8-11eb-8436-2f4ba5f82d25.jpg`;
    return (
        <>
            <Head>
                <meta property="og:title" content={ogTitle} />
                <meta property="og:type" content="blog" />
                <meta property="og:site_name" content="RyoM.net" />
                <meta
                    property="og:url"
                    content={`https://ryo-m.net${ogPath}`}
                />
                <meta property="og:image" content={image} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@tcr_jp" />
                <meta
                    name="twitter:url"
                    content={`https://ryo-m.net${ogPath}`}
                />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:image" content={image} />
            </Head>
            <div className="flex flex-col h-screen w-full bg-white">
                <Header />
                <div
                    className={`flex-1 overflow-y-auto page-wrapper ${className}`}
                >
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default PageLayout;
