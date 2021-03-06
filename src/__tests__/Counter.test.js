import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../components/Counter';

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
