import React from 'react';
import PropTypes from 'prop-types';

class RepositoryViewer extends React.Component {
  constructor(props) {
    super(props);
    this.GITHUB_URL = new URL('https://api.github.com/search/repositories');
    this.state = {
      filterTerm: '',
      isFetching: true,
      hasFetchError: false,
      fetchError: undefined,
      sortAttribute: 'stargazer_counts',
      sortOptions: [],
      repositories: [],
    };
  }

  componentDidMount() {
    const { queryTerm } = this.props;
    this.GITHUB_URL.searchParams.append('q', queryTerm);
    this.GITHUB_URL.searchParams.append('sort', 'stars');
    this.GITHUB_URL.searchParams.append('order', 'desc');
    if (process.NODE_ENV === 'development') {
      console.info(this.GITHUB_URL.href);
    }
    fetch(this.GITHUB_URL.href)
      .then(res => res.json())
      .then(({ items: repositories }) => {
        this.setState({
          repositories,
          isFetching: false,
          hasFetchError: false,
        });
      })
      .catch(fetchError => {
        this.setState({
          hasFetchError: true,
          fetchError,
        });
      });
  }

  updateSearchTerm({ target: { value: filterTerm } }) {
    this.setState({ filterTerm });
  }

  updateSortAttribute({ target: { value: sortAttribute } }) {
    this.setState({ sortAttribute });
  }

  render() {
    const { children } = this.props;
    const {
      repositories,
      isFetching,
      hasFetchError,
      fetchError,
      filterTerm,
      sortAttribute,
      sortOptions,
    } = this.state;
    return (
      <div>
        {children({
          repositories,
          isFetching,
          hasFetchError,
          fetchError,
          filterTerm,
          sortAttribute,
          sortOptions,
        })}
      </div>
    );
  }
}
RepositoryViewer.propTypes = {
  children: PropTypes.func.isRequired,
  queryTerm: PropTypes.string,
};

RepositoryViewer.defaultProps = {
  queryTerm: 'javascript',
};

export default RepositoryViewer;
export { default as RepositoryCard } from './RepositoryCard';
export { default as RepositoryList } from './RepositoryList';
