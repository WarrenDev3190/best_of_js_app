import React from 'react';
import PropTypes from 'prop-types';

function isChromeBrowser() {
  return navigator.userAgent.toLocaleLowerCase().indexOf('chrome') !== -1;
}

const DetectChrome = props => {
  if (isChromeBrowser()) {
    return props.children;
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <span aria-label="angry with horns">👿</span>
      You should be using Chrome!
      <span aria-label="angry with horns">👿</span>
    </div>
  );
};

DetectChrome.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default DetectChrome;
