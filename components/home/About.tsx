import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <section className="bg-white py-8">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    About
                </h1>
                <div className="w-full mb-4">
                    <div className="bg-blue-600 h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                </div>
                <div className="flex flex-wrap">
                    <div className="md:hidden w-full sm:w-1/2 p-6">
                        <img src="beer.png" alt="beer" />
                    </div>
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <h2 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Hi There. I am Ryo M
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Born in 1995. A web developer based in Tokyo. I have
                            always been very curious about new technologies.
                            Love to learn things of both backend and frontend :)
                            <br />
                            <br />
                            <div className="flex items-center">
                                <div className="hover:underline gradient bg-blue-600 hover:bg-blue-400 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
                                    <Link href="/about">
                                        <a className="px-5 py-1 ml-2 text-white">
                                            About Me
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className="hidden md:block w-full sm:w-1/2 p-6">
                        <img src="beer.png" alt="beer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
