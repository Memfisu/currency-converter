import React from 'react';
import Converter from './components/Converter';

const App = () => {
  // todo может поправить структуру, а то тут один компонент болтается
  return (
      <div className="app-container">
          <Converter />
      </div>
  );
}

export default App;
