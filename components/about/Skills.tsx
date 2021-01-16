import React from 'react';

const Skills: React.FC = () => {
    return (
        <section className="m-5">
            <h1 className="w-full my-2 text-4xl font-bold leading-tight text-gray-800">
                Skills
            </h1>
            <div className="w-full mb-4">
                <div className="bg-blue-600 h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <div className="grid gap-y-10 grid-flow-row-dense grid-cols-4 md:grid-cols-6 my-10">
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/html-5.svg"
                        alt="HTML5"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/css-3.svg"
                        alt="CSS3"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/javascript.svg"
                        alt="JavaScript"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/typescript-icon.svg"
                        alt="TypeScript"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/react.svg"
                        alt="React.js"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/nextjs.svg"
                        alt="Next.js"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/bootstrap.svg"
                        alt="Bootstrap"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
                        alt="Tailwind CSS"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/ruby.svg"
                        alt="Ruby"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/rails.svg"
                        alt="Ruby on Rails"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/php.svg"
                        alt="PHP"
                    />
                </div>
                <div className="w-14 md:w-24 h-14 md:h-24 object-cover flex items-center">
                    <img
                        src="https://cdn.svgporn.com/logos/laravel.svg"
                        alt="Laravel"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
