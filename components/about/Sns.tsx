import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sns: React.FC = () => {
    const date = new Date();
    return (
        <section className="m-5">
            <a
                href="https://twitter.com/Ryo_Code"
                target="_blank"
                rel="noreferrer"
            >
                <div className="flex items-center justify-center px-5 py-5 w-full md:w-1/2 mx-auto">
                    <div className="w-full mx-auto rounded-lg bg-white p-5 text-gray-800 shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <div className="w-full flex mb-4">
                            <div className="overflow-hidden rounded-full w-12 h-12">
                                <img src="me.png" alt="me" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-md">Ryo M</h6>
                                <p className="text-xs text-gray-600">
                                    @ryo_code
                                </p>
                            </div>
                            <div className="w-12 text-right text-blue-400 text-3xl">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </div>
                        <div className="w-full mb-4">
                            <p className="text-sm">
                                You want to know more about me? You can follow
                                me on Twitter by clicking this card 🤣
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="text-xs text-gray-500 text-right">
                                {`${date.getFullYear()}-${
                                    date.getMonth() + 1
                                }-${date.getDate()}`}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
};

export default Sns;
