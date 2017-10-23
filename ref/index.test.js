import Index from './';

// const Root = mount(<Index />);

describe('Component: index', () => {
  it('should render without crashing', () => {
    const str = JSON.stringify(Object.assign(
      {}, Index, { _reactInternalFiber: 'censored', _reactInternalInstance: 'censored' },
    ));
    expect(str).toMatchSnapshot();
  });
});
