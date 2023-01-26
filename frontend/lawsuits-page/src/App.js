import React from 'react';
import { GlobalState } from './global/GlobalState';
import { Router } from './routes/Router.js';

const App = () => {
  return (
    <>
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
};

export default App;
