import React from 'react';
import { shallow } from 'enzyme';
import ContentToggle from './content-toggle';

const wrapper = shallow(<ContentToggle summary="Taco Salad">Barf Emoji</ContentToggle>);

describe('Component: content-toggle', () => {
  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toHaveTagName('div');
    expect(wrapper).toHaveClassName('content-toggle');
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match initial state', () => {
    const state = { isOpen: false };
    expect(wrapper.state()).toEqual(state);
  });

  it('should have a button', () => {
    const btn = wrapper.find('button');
    expect(btn).toHaveClassName('content-toggle__summary');
    expect(btn).not.toHaveClassName('content-toggle__summary--is-open');
  });

  it('should have the correct children inside of button', () => {
    expect(wrapper.find('button')).toHaveText('Taco Salad');
  });

  it('should not have the details when closed', () => {
    const details = wrapper.find('.content-toggle__details');
    expect(details.exists()).toBeFalsy();
  });
});

// STATE CHANGED
describe('Component: content-toggle (state updated)', () => {
  it('should have the correct state', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper).toHaveState('isOpen', true);
  });

  it('should have the correct classnames on the button', () => {
    expect(wrapper.find('button')).toHaveClassName('content-toggle__summary');
    expect(wrapper.find('button')).toHaveClassName('content-toggle__summary--is-open');
  });

  it('should show details', () => {
    const details = wrapper.find('.content-toggle__details');
    expect(details.exists()).toBeTruthy();
    expect(details).toHaveText('Barf Emoji');
  });
});
