import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Bro from 'brototype';
import App from './app';

const wrapper = shallow(<App />);

describe('Component: App', () => {
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toHaveTagName('div');
  });

  it('should have correct initial state', () => {
    const state = wrapper.state();
    const expected = {
      tacos: [
        { name: 'Asada', src: 'asada.png' },
        { name: 'Carnitas', src: 'carnitas.png' },
        { name: 'Pollo', src: 'pollo.png' },
      ],
    };
    expect(Bro(state).doYouEven('tacos')).toBe(Bro.TOTALLY);
    expect(state.tacos.length).toBe(3);

    expect(state).toEqual(expected);
  });

  it('should contain the correct children', () => {
    const toggles = wrapper.find('ContentToggle');
    const tacos = wrapper.state('tacos');
    toggles.forEach((toggle, ind) => {
      const img = toggle.find('img').first();
      expect(img).toHaveClassName('taco');
      expect(img).toHaveProp('src', tacos[ind].src);
      expect(img).toHaveProp('alt', `${tacos[ind].name} taco`);

      expect(toggle).toHaveProp('summary', tacos[ind].name);
      expect(toggle.key()).toBe(tacos[ind].name);
    });
  });
});
