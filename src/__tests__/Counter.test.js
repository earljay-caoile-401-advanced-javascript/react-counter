import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../components/Counter';
import Header from '../components/Header';
import Footer from '../components/Footer';

describe('counter component', () => {
  it('has right initial state values', () => {
    const component = shallow(<Counter />);
    expect(component.state('count')).toBe(0);
  });

  it('updates the state correctly when we click the + button', () => {
    const component = shallow(<Counter />);
    const plusBtn = component.find('span.up');

    plusBtn.simulate('click');
    expect(component.state('count')).toBe(1);

    plusBtn.simulate('click');
    expect(component.state('count')).toBe(2);
  });

  it('updates the state correctly when we click the - button', () => {
    const component = shallow(<Counter />);
    const minusBtn = component.find('span.down');

    minusBtn.simulate('click');
    expect(component.state('count')).toBe(-1);

    minusBtn.simulate('click');
    expect(component.state('count')).toBe(-2);
  });
});

describe('counter component appearance', () => {
  it('looks right', () => {
    const component = render(<Counter />);

    const minus = component.find('span.down');
    expect(minus.text()).toBe(' - ');

    const count = component.find('span.count');
    expect(count.text()).toBe('0');

    const plus = component.find('span.up');
    expect(plus.text()).toBe(' + ');
  });
});

describe('header component', () => {
  it('displays the proper html', () => {
    const component = mount(<Header />);
    const header = component.find('h1');

    expect(header.text()).toBe('Counters R Fun');
  });
});

describe('footer component', () => {
  it('displays the proper html', () => {
    const component = mount(<Footer />);
    const footer = component.find('Footer');

    expect(footer.text()).toBe('\u00A9 2018 Code Fellows');
  });
});
