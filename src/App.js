import React from 'react';
import RepositoryViewer, { RepositoryList } from './components/Repository';
import './styles/main.scss';

const App = () => (
  <div>
    <RepositoryViewer>
      {({ isFetching, hasFetchError, repositories }) => (
        <RepositoryList
          isFetching={isFetching}
          hasFetchError={hasFetchError}
          repositories={repositories}
        />
      )}
    </RepositoryViewer>
  </div>
);

export default App;
