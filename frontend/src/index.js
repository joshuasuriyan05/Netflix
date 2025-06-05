import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './Success';
import Fail from './Fail';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
      <Route path="/fail" element={<Fail />} />
    </Routes>
  </BrowserRouter>
);
