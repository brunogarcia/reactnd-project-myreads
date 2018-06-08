import React from 'react';
import { shallow } from 'enzyme';
import Search from './index';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const props = {
  history: {
    push: () => {},
  },
};

const results = [
  {
    title: 'test 1',
    authors: ['test 1', 'test 1'],
    imageLinks: {
      smallThumbnail: 'test 1',
      thumbnail: 'test 1',
    },
  },
  {
    title: 'test 2',
    authors: ['test 2', 'test 2'],
    imageLinks: {
      smallThumbnail: 'test 2',
      thumbnail: 'test 2',
    },
  },
];

describe('Search component states', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search {...props} />);
  });

  it('renders Loading component with default state', () => {
    wrapper.setState({
      message: '',
      loading: true,
      error: false,
      results: [],
    });

    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders Error component if found some error', () => {
    wrapper.setState({
      message: '',
      loading: false,
      error: true,
      results: [],
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });
});

describe('Search component lifecycle', () => {
  it('should call getAllBooks when the component did mount', () => {
    const getAllBooksMocked = jest.spyOn(Search.prototype, 'getAllBooks');

    shallow(<Search {...props} />);

    expect(getAllBooksMocked).toHaveBeenCalledTimes(1);

    getAllBooksMocked.mockClear();
  });
});

describe('Search component has books', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search {...props} />);

    wrapper.setState({
      message: '',
      loading: false,
      error: false,
      results,
    });
  });

  it('renders SearchBar component', () => {
    expect(wrapper.find(SearchBar).exists()).toBeTruthy();
  });

  it('renders SearchResults component', () => {
    expect(wrapper.find(SearchResults).exists()).toBeTruthy();
  });
});
