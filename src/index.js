import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

//Root is linking the js to the html
const Root = ReactDOM.createRoot(document.getElementById('Root'));
Root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
