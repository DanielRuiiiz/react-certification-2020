import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import SearchBar from '../SearchBar';
const renderComponent = () =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path="/">
        <SearchBar />
      </Route>
    </Router>
  );

describe('<SearchBar />', () => {
  it('should display the SearchBar', () => {
    const { queryByTestId } = renderComponent();
    const SearchBar = queryByTestId('search-bar');
    expect(SearchBar).toBeInTheDocument();
  });
  it('should be empty at the start', () => {
    const { getByTestId } = renderComponent();
    const SearchInput = getByTestId('search-input');
    expect(SearchInput).toBeInTheDocument();
    expect(SearchInput).toBeEmptyDOMElement();
  });
});
