import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'tests/testUtil';

import Top from 'components/home/Top';

const wrapper = shallow(<Top />);

describe('Top component tests', () => {
    test('renders h1 tag', () => {
        expect(wrapper.find(select('title')).text()).toEqual(
            'Hi There! Wanna Talk with Me?'
        );
    });
});
