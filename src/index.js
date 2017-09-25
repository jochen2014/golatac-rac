import React from 'react'
import {render} from 'react-dom'

import { Router, browserHistory} from 'react-router'
import routes from './routes'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import './vendor/naviBarPatch'
import './style/index.scss'

const root = document.getElementById('root')
const store = configureStore()
render(<Provider store={store}>
        <Router history={browserHistory} >
            {routes}
        </Router>
    </Provider>, root)