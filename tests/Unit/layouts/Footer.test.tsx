import React from 'react';
import { shallow } from 'enzyme';
import { select } from 'tests/testUtil';

import Footer from 'components/layouts/Footer';

const wrapper = shallow(<Footer />);

describe('Footer component tests', () => {
    test('renders twitter link', () => {
        expect(wrapper.find(select('twitter')).text()).toEqual('Twitter');
    });

    test('has twitter link', () => {
        expect(wrapper.find(select('twitter')).prop('href')).toEqual(
            'https://twitter.com/Ryo_Code'
        );
    });
});
