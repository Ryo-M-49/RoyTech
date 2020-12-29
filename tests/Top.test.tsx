import React from 'react';
import { shallow } from 'enzyme';
import Top from '../components/home/Top';

describe('Top component tests', () => {
    test('renders h1 tag', () => {
        const wrapper = shallow(<Top />);
        expect(wrapper.find('h1').text()).toEqual('We areunder construction.');
    });
});
