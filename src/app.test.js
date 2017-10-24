import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

const wrapper = shallow(<App />);

describe('Component: app.js', () => {
  it('should render without errors', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toHaveTagName('div');
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct initial state', () => {
    const state = {
      tacos: [
        { name: 'Asada', src: 'asada.png' },
        { name: 'Carnitas', src: 'carnitas.png' },
        { name: 'Pollo', src: 'pollo.png' },
      ],
    };
    expect(wrapper.state()).toEqual(state);
  });

  it('should should have the correct children', () => {
    const tacos = wrapper.state('tacos');
    const toggles = wrapper.find('ContentToggle');
    expect(toggles.length).toBe(3);
    toggles.forEach((toggle, ind) => {
      expect(toggle).toHaveProp('summary', tacos[ind].name);
      expect(toggle.key()).toBe(tacos[ind].name);
      expect(toggle.childAt(0)).toHaveTagName('img');
    });
  });

  it('should have correct props on child image', () => {
    const tacos = wrapper.state('tacos');
    const toggles = wrapper.find('ContentToggle');
    toggles.forEach((toggle, ind) => {
      const img = toggle.find('img');
      expect(img).toHaveProp('src', tacos[ind].src);
      expect(img).toHaveProp('alt', `${tacos[ind].name} taco`);
    });
  });
});
