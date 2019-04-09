import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' //menyediakan state utk aplikasi react karena merupakan library terpisah
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger' // tracking store
import'bootstrap/dist/css/bootstrap.min.css'

import App from './components/App'
import reducers from './reducers/index'

const Store = createStore(reducers, applyMiddleware(logger, thunk))

ReactDOM.render(
<Provider store={Store}>
<App/>
</Provider>, document.getElementById('root'))
