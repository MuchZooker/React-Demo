import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './index.css';
import App from './pages/App';
import Manager from './pages/admin/Manager'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route path="/index" component={Manager}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
