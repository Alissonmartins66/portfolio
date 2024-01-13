import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ResetCSS from './components/RemoveCSS';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
