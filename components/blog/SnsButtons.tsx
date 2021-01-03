import React from 'react';

const SnsButtons: React.FC = () => {
    return (
        <>
            <img
                src="/twitter.png"
                alt="twitter"
                width="34"
                height="34"
                className="my-1"
            />
            <img
                src="/github.png"
                alt="github"
                width="26"
                height="26"
                className="my-1"
            />
            <img
                src="/qiita.png"
                alt="qiita"
                width="32"
                height="32"
                className="my-1"
            />
        </>
    );
};

export default SnsButtons;
