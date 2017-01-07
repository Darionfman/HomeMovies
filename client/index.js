import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { store } from './reducers/main'
import { Provider } from 'react-redux'
import App from './components/App'
import BookDirectory from './components/BookDirectory'

render(
  <Provider store={ store } >
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={BookDirectory} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('app')
)

