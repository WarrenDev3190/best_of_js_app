import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef RepositoryCardProps
 * @type {Object}
 * @property {String} name
 * @property {Object} owner
 * @property {String} html_url
 * @property {Object} license
 * @property {Number} stargazers_count
 * @property {String} updated_at
 */

/**
 *
 * @param {RepositoryCardProps} props
 */
const RepositoryCard = props => {
  const { repository } = props;
  const {
    name,
    owner,
    html_url: htmlURL,
    license,
    stargazers_count: stargazersCount,
    updated_at: updatedAt,
  } = repository;
  return (
    <article className="js-repository-card">
      <header>
        <h3 className="js-repository-name">
          <a className="js-html-url" href={htmlURL} target="blank">
            {name}
          </a>
        </h3>
        <h4>
          <span className="js-stargazers-count">{stargazersCount}</span> Stars
        </h4>
        <img src={owner.avatar_url} alt="repository avatar" />
      </header>
      <footer>
        <h4 className="js-license">{license.spdx_id}</h4> {' | '}
        <h4 className="js-updated-at">{updatedAt}</h4>
      </footer>
    </article>
  );
};

RepositoryCard.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
    html_url: PropTypes.string.isRequired,
    license: PropTypes.shape({
      spdx_id: PropTypes.string.isRequired,
    }).isRequired,
    stargazers_count: PropTypes.number.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default RepositoryCard;
