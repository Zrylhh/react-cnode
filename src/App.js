import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/home'
import User from './pages/user'
import Topic from './pages/topic'
import NotFund from './pages/404'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/user/:userId" component={User}></Route>
            <Route path="/topic/:topicId" component={Topic}></Route>
            <Route path="/" exact  component={Home}></Route>
            <Route component={NotFund}></Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
