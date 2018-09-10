import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout, { LayoutHeader, LayoutMain } from '../../common/components/Layout'
import Topbar from '../../common/components/Topbar'
import { BackTo } from '../../common/components/BackTo'
import { AuthorMeta } from '../../common/components/TopicMeta'

import { fetchUserInfoByLoginname } from './actions'

export class User extends Component {
  componentDidMount() {
    let user = this.props.user
    let loginname = this.props.match && this.props.match.params.loginname

    if (user && user.loginname === loginname) {
      return
    }
    this.props.fetchUserInfoByLoginname(loginname)
  }

  render () {
    return (
      <Layout className="User">
        <LayoutHeader>
          <Topbar title="用户信息">
            <BackTo className="nav-item left"></BackTo>
          </Topbar>
        </LayoutHeader>
        <LayoutMain>
          <div className="basic-info">
            <AuthorMeta></AuthorMeta>
          </div>
          <div className="created-topics"></div>
          <div className="replied-topics"></div>
        </LayoutMain>
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.viewedUser
  }
}

export default connect(
  mapStateToProps,
  {
    fetchUserInfoByLoginname
  }
)(User)