import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Cards from './components/Cards';


ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/cards" component={Cards} />
      </div>
  </Router>,
  document.getElementById('root'));
