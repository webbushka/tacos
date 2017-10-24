import Root from './';

describe('Component: index.js (Root)', () => {
  it('should not blow up', () => {
    const str = JSON.stringify(Object.assign({}, Root, { _reactInternalFiber: 'censored' }));
    expect(str).toMatchSnapshot();
  });
});
