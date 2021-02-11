import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from'./SignIn';

ReactDOM.render(
  <React.StrictMode>
    <SignIn/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

