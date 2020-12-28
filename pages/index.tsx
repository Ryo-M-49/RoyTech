import PageLayout from 'components/layouts/PageLayout';
import Post from 'components/Post';
import "tailwindcss/tailwind.css";

const Home: React.FC = () => {
    return (
        <PageLayout>
            <div className="flex flex-wrap justify-center">
                <div className="mt-5 mr-5 mr-5">
                    <Post />
                </div>
            </div>
        </PageLayout>
    );
}
export default Home;
