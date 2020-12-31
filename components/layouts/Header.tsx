import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

const Header: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    let spNav = null;
    if (isOpen) {
        spNav = (
            <nav className="md:hidden text-xl transition duration-500 ease-in-out transform">
                <ul data-testid="ul">
                    <li
                        className={`transition duration-500 ease-in-out transform hover:translate-x-2 border-b my-4 ${
                            router.pathname == '/'
                                ? 'border-blue-900 border-b-2 translate-x-2'
                                : ''
                        }`}
                    >
                        <Link href="/">
                            <a className="px-5 pt-2">Home</a>
                        </Link>
                    </li>
                    <li
                        className={`transition duration-500 ease-in-out transform hover:translate-x-2 border-b my-4 ${
                            router.pathname == '/about'
                                ? 'border-blue-900 border-b-2 translate-x-2'
                                : ''
                        }`}
                    >
                        <Link href="/about">
                            <a className="px-5 pt-2">About</a>
                        </Link>
                    </li>
                    <li
                        className={`transition duration-500 ease-in-out transform hover:translate-x-2 border-b my-4 ${
                            router.pathname == '/work'
                                ? 'border-blue-900 border-b-2 translate-x-2'
                                : ''
                        }`}
                    >
                        <Link href="/work">
                            <a className="px-5 pt-2">Work</a>
                        </Link>
                    </li>
                    <li
                        className={`transition duration-500 ease-in-out transform hover:translate-x-2 ${
                            router.pathname == '/blog' ? 'translate-x-2' : ''
                        }`}
                    >
                        <Link href="/blog">
                            <a className="px-5 py-1 ml-2 text-white bg-blue-900 rounded-full hover:bg-blue-600">
                                Blog
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }

    return (
        <header className="py-5 px-5 ">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <a className="text-2xl">
                        Blog<span className="text-sm">.com</span>
                    </a>
                </Link>
                {/* PC向けnav */}
                <nav className="text-xl hidden md:block">
                    <ul className="flex items-center">
                        <li
                            className={`px-5 mx-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                                router.pathname == '/'
                                    ? 'border-blue-900 border-b-2 -translate-y-1 scale-110'
                                    : ''
                            }`}
                        >
                            <Link href="/">
                                <a className="">Home</a>
                            </Link>
                        </li>
                        <li
                            className={`px-5 mx-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                                router.pathname == '/about'
                                    ? 'border-blue-900 border-b-2 -translate-y-1 scale-110'
                                    : ''
                            }`}
                        >
                            <Link href="/about">
                                <a className="">About</a>
                            </Link>
                        </li>
                        <li
                            className={`px-5 ml-3 mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                                router.pathname == '/work'
                                    ? 'border-blue-900 border-b-2 -translate-y-1 scale-110'
                                    : ''
                            }`}
                        >
                            <Link href="/work">
                                <a className="">Work</a>
                            </Link>
                        </li>
                        <li
                            className={`py-1 px-2 text-white bg-blue-900 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 ${
                                router.pathname == '/blog'
                                    ? 'bg-blue-600 -translate-y-1 scale-110'
                                    : ''
                            }`}
                        >
                            <Link href="/blog">
                                <a className="px-5 py-2">Blog</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* SP向けハンバーガーメニュー */}
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            {/* SP向けNav */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-300 transform"
                enterFrom="top-0 left-0 -translate-x-full"
                enterTo=" translate-x-0"
                leave="transition ease-in duration-300 transform"
                leaveFrom=" translate-x-0"
                leaveTo="-translate-x-full"
            >
                {spNav}
            </Transition>
        </header>
    );
};

export default Header;
