import React from 'react';
import PropTypes from 'prop-types';
import RepositoryCard from './RepositoryCard';

/**
 * @typedef RepositoryListProps
 * @type {Object}
 * @property {Boolean} isFetching
 * @property {Boolean} hasFetchError
 * @property {Object[]} repositories
 */

/**
 *
 * @param {RepositoryListProps} props
 */
const RepositoryList = props => {
  const { repositories, isFetching, hasFetchError } = props;
  if (hasFetchError) return <h2 className="js-is-fetching">Error Fetching Repositories</h2>;
  if (isFetching) return <h2 className="js-has-fetch-error">Loading...</h2>;
  return (
    <section>
      <header>Searching for Repositories</header>
      <ul className="js-repositories">
        {repositories.map(repository => (
          <RepositoryCard repository={repository} key={repository.name} />
        ))}
      </ul>
    </section>
  );
};

RepositoryList.propTypes = {
  isFetching: PropTypes.bool,
  hasFetchError: PropTypes.bool,
  repositories: PropTypes.arrayOf(PropTypes.object),
};

RepositoryList.defaultProps = {
  isFetching: true,
  hasFetchError: false,
  repositories: [],
};

export default RepositoryList;
