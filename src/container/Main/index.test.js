import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';
import Header from '../../components/Header';
import Bookshelves from '../../components/Bookshelves';
import AddBook from '../../components/AddBook';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const props = {
  history: {
    push: () => {},
  },
};

const books = [
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

describe('Main component states', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main {...props} />);
  });

  it('renders Loading component with default state', () => {
    wrapper.setState({
      loading: true,
      error: false,
      books: [],
    });

    expect(wrapper.find(Loading).exists()).toBeTruthy();
  });

  it('renders Error component if found some error', () => {
    wrapper.setState({
      loading: false,
      error: true,
      books: [],
    });

    expect(wrapper.find(Error).exists()).toBeTruthy();
  });
});

describe('Main component lifecycle', () => {
  it('should call getAllBooks when the component did mount', () => {
    const getAllBooksMocked = jest.spyOn(Main.prototype, 'getAllBooks');

    shallow(<Main {...props} />);

    expect(getAllBooksMocked).toHaveBeenCalledTimes(1);

    getAllBooksMocked.mockClear();
  });
});

describe('Main component has books', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main {...props} />);

    wrapper.setState({
      loading: false,
      error: false,
      books,
    });
  });

  it('renders Header component', () => {
    expect(wrapper.find(Header).exists()).toBeTruthy();
  });

  it('renders Bookshelves component', () => {
    expect(wrapper.find(Bookshelves).exists()).toBeTruthy();
  });

  it('renders AddBook component', () => {
    expect(wrapper.find(AddBook).exists()).toBeTruthy();
  });
});
