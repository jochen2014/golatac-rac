import React, {Component} from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import Home from './home'
import {SearchContainer as SearchPage, 
        SearchResultContainer as SearchResultPage
      } from './search'
import App from './app'


export default (
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/search' component={SearchPage} />
    <Route path='/make/model/:id' component={SearchResultPage} />
  </Route>
)