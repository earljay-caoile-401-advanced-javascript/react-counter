import React from 'react';
import { mount } from 'enzyme';
import Footer from '../components/Footer';

describe('footer component', () => {
  it('displays the proper html', () => {
    const component = mount(<Footer />);
    const footer = component.find('Footer');

    expect(footer.text()).toBe('\u00A9 2018 Code Fellows');
  });
});
