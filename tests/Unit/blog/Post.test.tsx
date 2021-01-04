import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'tests/testUtil';

import Post from 'components/blog/Post';

const fields = {
    fields: {
        author: {
            fields: {
                image: {
                    fields: 'string',
                    title: 'authorTitle',
                },
                name: 'Ryo M',
            },
        },
        description: 'ディスクリプションです。',
        markdown: '# テストです',
        coverImage: {
            fields: {
                file: {
                    contentType: 'string',
                    details: {
                        image: {
                            width: 64,
                            height: 64,
                        },
                        size: 64,
                    },
                    fileName: 'カバーイメージ',
                    url: '//images.jpg',
                },
                title: 'イメージ',
            },
        },
        date: '2020-12-20',
        slug: 'test-post',
        title: 'post title',
    },
    isTopPost: false,
};

const wrapper = shallow(<Post {...fields} />);

describe('Post component tests', () => {
    test('renders post title', () => {
        expect(wrapper.find(select('title')).text()).toEqual('post title');
    });

    test('renders post content', () => {
        expect(wrapper.find(select('content')).text()).toEqual(
            'ディスクリプションです。'
        );
    });
});
