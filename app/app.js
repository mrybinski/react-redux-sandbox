import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import HomeContainer from './components/HomeContainer';
import About from './components/About';

import configureStore from './root/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={ HomeContainer } />
                <Route path='/about' component={ About } />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
