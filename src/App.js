import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import {
  LoadableHome,
  LoadableTopic,
  LoadableUser,
  LoadableNotFund
} from './pages/index'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/user/:loginname" component={LoadableUser}></Route>
            <Route path="/topic/:topicId" component={LoadableTopic}></Route>
            <Route path="/" exact  component={LoadableHome}></Route>
            <Route component={LoadableNotFund}></Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
