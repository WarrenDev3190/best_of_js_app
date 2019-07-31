import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../../src/components/Hello';

describe('Hello', () => {
  const app = shallow(<Hello greeting="Hola" />);

  it('renders a given greeting', () => {
    expect(app.find('h1').text()).toBe('Hola World!');
  });
});
