import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fullScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  centerText: { textAlign: 'center' },
};

const Hello = ({ greeting, isFullScreen }) => {
  if (isFullScreen) {
    return (
      <div style={styles.fullScreen}>
        <header style={styles.centerText}>
          <h1>{greeting} World!</h1>
          <p>Start Hacking</p>
        </header>
      </div>
    );
  }
  return (
    <header style={styles.centerText}>
      <h1>{greeting} World!</h1>
      <p>Start Hacking</p>
    </header>
  );
};

Hello.propTypes = {
  greeting: PropTypes.string.isRequired,
  isFullScreen: PropTypes.bool,
};

Hello.defaultProps = {
  isFullScreen: true,
};

export default Hello;
