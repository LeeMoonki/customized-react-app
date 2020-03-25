import { shallow } from 'enzyme';
import React from 'react';
import Hello from '../src/components/Hello.jsx';

describe('<Hello />', () => {
  it('basic test', () => {
    const wrapper = shallow(<Hello />);

    expect(wrapper.find('.title-wrapper').length).toBe(1);
  });
});
