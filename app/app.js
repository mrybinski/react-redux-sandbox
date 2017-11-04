import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path='/' exact component={ Home } />
      <Route path='/about' component={ About } />
    </App>
  </BrowserRouter>,
  document.getElementById('app')
);
