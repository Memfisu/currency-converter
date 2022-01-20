import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Converter from './components/Converter';

const App = () => {
  return (
      <Provider store={store}>
        <div>
          <Converter />
        </div>
      </Provider>
  );
}

export default App;
