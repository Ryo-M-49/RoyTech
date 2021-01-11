import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import 'tailwindcss/tailwind.css';

type Props = {
    className?: string;
};

const PageLayout: React.FC<Props> = ({ children, className }) => {
    return (
        <>
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
