import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContentToggle from './content-toggle';

const wrapper = shallow(<ContentToggle summary="Asdf">asdf</ContentToggle>);

describe('Component: content-toggle', () => {
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toHaveTagName('div');
    expect(wrapper).toHaveClassName('content-toggle');
  });

  it('should have correct initial state', () => {
    const state = wrapper.state();
    const expected = { isOpen: false };
    expect(state).toEqual(expected);
  });

  it('should contain a button', () => {
    const btn = wrapper.find('button');
    expect(btn.exists()).toBeTruthy();
    expect(btn).toHaveClassName('content-toggle__summary');
    expect(btn).toHaveText('Asdf');
  });

  it('should be in the closed state', () => {
    const btn = wrapper.find('button');
    expect(btn).not.toHaveClassName('content-toggle__summary--is-open');

    expect(wrapper.children().length).toBe(1);
  });

  it('should update state when toggle is clicked', () => {
    expect(wrapper).toHaveState('isOpen', false);
    wrapper.find('button').simulate('click');
    expect(wrapper).toHaveState('isOpen', true);
  });

  it('should be in the open state', () => {
    const btn = wrapper.find('button');
    expect(btn).toHaveClassName('content-toggle__summary--is-open');

    expect(wrapper.children().length).toBe(2);
  });

  it('should contain details', () => {
    const details = wrapper.find('.content-toggle__details');
    expect(details.exists()).toBeTruthy();
    expect(details).toHaveTagName('div');
    expect(details).toHaveText('asdf');
  });
});
