import PageLayout from 'components/layouts/PageLayout';
import 'tailwindcss/tailwind.css';

const Work: React.FC = () => {
    return (
        <PageLayout
            ogTitle="My Work"
            ogPath="/work"
            ogType="article"
            ogImage="https://user-images.githubusercontent.com/57619070/104796298-4ec56f80-57f8-11eb-81bb-8ad6a2676c70.png"
        >
            <div className="h-screen flex flex-col justify-center ">
                <h1 className="text-4xl md:text-7xl text-center">
                    We are<br></br>under construction.
                </h1>
            </div>
        </PageLayout>
    );
};
export default Work;
