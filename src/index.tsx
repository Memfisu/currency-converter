import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import Courses from './components/Courses';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="courses" element={<Courses />} />
          </Routes>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
