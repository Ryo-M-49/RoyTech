import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="text-white text-center page-footer p-2 bg-blue-600 bg-gradient-to-r from-indigo-900">
            <div>
                <a
                    href="https://twitter.com/Ryo_Code"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="twitter"
                >
                    Twitter
                </a>
                {' | '}
                <a
                    href="https://github.com/Ryo-M-49"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
                {' | '}
                <a
                    href="https://qiita.com/Ryo__M"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Qiita
                </a>
            </div>
            <p className="my-2">
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <Link href="/">
                    <a> roytech.com </a>
                </Link>
            </p>
        </footer>
    );
};

export default Footer;
