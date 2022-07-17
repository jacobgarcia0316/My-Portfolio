import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import './Components/AboutMe/AboutMe.css'
// import './Components/Github/Github.css'
// import './Components/Homepage/Homepage.css'
// import './Components/Projects/Projects.css'
// import './Components/Navbar/Navbar.css'


//Root is linking the js to the html
const Root = ReactDOM.createRoot(document.getElementById('Root'));
Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
