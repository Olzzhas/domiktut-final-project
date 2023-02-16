import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

axios.defaults.withCredentials = true
axios.defaults.validateStatus = function(){
  return true
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </>
);
