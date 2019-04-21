import React from 'react';
import { Product } from '..';
import { shallow } from 'enzyme';

it('should match snapshot', () => {
  const wrapper = shallow(<Product price={10.1} name="Shirt" />);
  expect(wrapper).toMatchSnapshot();
});
