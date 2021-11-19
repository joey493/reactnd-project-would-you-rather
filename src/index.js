import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App'
import { Provider } from 'react-redux';
import MyStore from './redux/Store'

ReactDOM.render(
  <Provider store={MyStore}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root')
);
