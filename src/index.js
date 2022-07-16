import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';
//Root is linking the js to the html
const Root = ReactDOM.createRoot(document.getElementById('Root'));
Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
