import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Loading from './common/components/Loading'

import {
  LoadableHome,
  LoadableTopic,
  LoadableUser,
  LoadableNotFund
} from './pages/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{overflow: 'scroll', height: '100%'}}>
          <Router>
            <Switch>
              <Route path="/user/:loginname" component={LoadableUser}></Route>
              <Route path="/topic/:topicId" component={LoadableTopic}></Route>
              <Route path="/" exact  component={LoadableHome}></Route>
              <Route component={LoadableNotFund}></Route>
            </Switch>
          </Router>
          {
            store.getState().showLoading ? <Loading></Loading> : null
          }
        </div>
      </Provider>
    )
  }
}

export default App
