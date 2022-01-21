import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store';
import Courses from './components/Courses';
import Converter from './components/Converter';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <div className="app-container">
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Converter />} />
                      <Route path="courses" element={<Courses />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
