import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

// import Home from './pages/home/index';
// import Details from './pages/details/index';
import Main from './pages/main/index';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
