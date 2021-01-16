import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

type Props = {
    className?: string;
    ogTitle?: string;
    ogImage?: string;
    ogPath?: string;
    ogType?: 'website' | 'article';
};

const PageLayout: React.FC<Props> = ({
    children,
    className,
    ogTitle,
    ogImage,
    ogPath,
    ogType,
}) => {
    const image = `https://ogi-api.vercel.app/.png?theme=black&md=1&fontSize=130px&background=${ogImage}`;
    return (
        <>
            <Head>
                <meta property="og:title" content={ogTitle} />
                <meta property="og:type" content={ogType} />
                <meta property="og:site_name" content="RyoM.net" />
                <meta
                    property="og:url"
                    content={`https://ryo-m.net${ogPath}`}
                />
                <meta property="og:image" content={encodeURI(image)} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@tcr_jp" />
                <meta
                    name="twitter:url"
                    content={`https://ryo-m.net${ogPath}`}
                />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:image" content={encodeURI(image)} />
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
