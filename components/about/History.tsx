import React from 'react';

const History: React.FC = () => {
    return (
        <section className="m-5">
            <h1 className="w-full my-2 text-4xl font-bold leading-tight text-gray-800">
                History
            </h1>
            <div className="w-full mb-4">
                <div className="bg-blue-600 h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <div className="text-white text-md h-80 grid gap-y-3 grid-flow-row-dense grid-cols-1 md:grid-cols-12 grid-rows-4 my-8">
                <div className="flex items-center justify-between py-3 px-5 rounded-lg bg-blue-600 row-end-2 md:col-start-10 md:col-end-13 md:col-span-3">
                    <p>
                        Web Developer
                        <br />
                        <span className="text-sm">2020/08/01~Now</span>
                    </p>
                    <p className="md:hidden text-xl">0.5+ year</p>
                </div>
                <div className="flex items-center justify-between py-3 px-5 rounded-lg bg-blue-500 row-end-3 md:col-start-7 md:col-end-10 md:col-span-3">
                    <p>
                        Started learning programming
                        <br />
                        <span className="text-sm">2019/11/01~</span>
                    </p>
                    <p className="md:hidden text-xl">0.5+ year</p>
                </div>
                <div className="flex items-center justify-between py-3 px-5 rounded-lg bg-blue-400 row-end-4 md:col-start-4 md:col-end-10 md:col-span-3">
                    <p>
                        Analyst at Cognizant
                        <br />
                        <span className="text-sm">2019/04/01~</span>
                    </p>
                    <p className="md:hidden text-xl">1+ year</p>
                </div>
                <div className="flex items-center justify-between py-3 px-5 rounded-lg bg-blue-300 row-end-5 md:col-start-1 md:col-end-4 md:col-span-3">
                    <p>
                        Student of English major at TUFS
                        <br />
                        <span className="text-sm">~2019/03/31</span>
                    </p>
                    <p className="md:hidden text-xl">5 years</p>
                </div>
            </div>
        </section>
    );
};

export default History;
