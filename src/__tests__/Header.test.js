import React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';

describe('header component', () => {
  it('displays the proper html', () => {
    const component = mount(<Header />);
    const header = component.find('h1');

    expect(header.text()).toBe('Counters R Fun');
  });
});
