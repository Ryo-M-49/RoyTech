import React from 'react';

const Top: React.FC = () => {
    return (
        <section className="m-8">
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-full md:w-1/2 mx-5 md:mx-0">
                    <img
                        className="mx-auto bg-yellow-50 shadow-lg"
                        src="me-with-dog.png"
                        alt="RyoM"
                    />
                </div>
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-3xl text-gray-800 font-bold leading-tight mb-3">
                        I am Ryo, a web developer working on various projects in
                        Tokyo, Japan.
                    </h2>
                    <p className="text-gray-600 mb-8 text-md">
                        I have spent the past 1 year working across different
                        areas of web development; front-end development,
                        building servers with CentOS, building a system for an
                        online gym website with Laravel.
                        <br />
                        <br />
                        These days I spent my time in researching and using new
                        technologies regardless of my business scope.
                        <br />
                        <br />
                        Out of the work I am fund of video games and watching tv
                        series on Netflix.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Top;
