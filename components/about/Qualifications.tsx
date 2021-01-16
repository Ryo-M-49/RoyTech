import React from 'react';

const Qualifications: React.FC = () => {
    return (
        <section className="m-5">
            <h1 className="w-full my-2 text-4xl font-bold leading-tight text-gray-800">
                Qualifications
            </h1>
            <div className="w-full mb-4">
                <div className="bg-blue-600 h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <ul className="list-insid text-xl">
                <li className="mb-5">
                    <p>TOEIC Listening and Reading 905</p>
                    <p>- Apr. 2016</p>
                </li>
                <li className="justify-between md:w-2/3 mb-5">
                    <p>EIKEN Grade 1</p>
                    <p>- Mar. 2017</p>
                </li>
                <li className="justify-between md:w-2/3 mb-5">
                    <p>LPIC1</p>
                    <p>- Now Studying!</p>
                </li>
            </ul>
        </section>
    );
};

export default Qualifications;
