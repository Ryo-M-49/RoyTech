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
        content: {
            content: [
                {
                    nodeType: 'paragraph',
                    data: {},
                    content: [
                        {
                            nodeType: 'text',
                            value: 'Hello',
                            data: {},
                            marks: [{ type: 'bold' }],
                        },
                    ],
                },
            ],
        },
        coverImage: {
            fields: {
                file: 'https://test.com',
                title: 'blog post image',
            },
        },
        date: new Date(),
        slug: 'test-post',
        title: 'post title',
    },
};

const wrapper = shallow(<Post {...fields} />);

describe('Post component tests', () => {
    test('renders post title', () => {
        expect(wrapper.find(select('title')).text()).toEqual('post title');
    });

    test('renders post content', () => {
        expect(wrapper.find(select('content')).text()).toEqual(
            'Lorem ipsum dolor sit amet'
        );
    });
});
