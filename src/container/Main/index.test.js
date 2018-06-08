import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

describe('Main states', () => {
  it('renders Loading component with default state', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders Error component with some error', () => {
    const wrapper = shallow(<Main />);

    wrapper.setState({
      loading: false,
      error: true,
      books: [],
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });
});

describe('Main lifecycle', () => {
  it('should call getAllBooks when the component did mount', () => {
    const getAllBooksMocked = jest.spyOn(Main.prototype, 'getAllBooks');

    shallow(<Main />);

    expect(getAllBooksMocked).toHaveBeenCalledTimes(1);

    getAllBooksMocked.mockClear();
  });
});
