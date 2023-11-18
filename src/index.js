import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './q2/About';
import Home from './q2/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* For Question 2 */}
    {/*  <Routes>
      <Route path='/' element={<App />}>
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
      </Route>

    </Routes> */}
    <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
