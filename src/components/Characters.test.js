import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters.js';

describe('Characters component', () => {
  it('renders Characters', () => {
    const wrapper = shallow(<Characters characters={[[{ _id: 'characters' }]]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
