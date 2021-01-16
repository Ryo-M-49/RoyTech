import PageLayout from 'components/layouts/PageLayout';
import 'tailwindcss/tailwind.css';

const Work: React.FC = () => {
    return (
        <PageLayout ogTitle="My Work" ogPath="/work" ogType="article">
            <div className="w-100 min-h-full flex flex-col justify-center text-center">
                <h1 className="text-7xl">
                    We are<br></br>under construction.
                </h1>
            </div>
        </PageLayout>
    );
};
export default Work;
