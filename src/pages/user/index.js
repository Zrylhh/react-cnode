import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout, { LayoutHeader, LayoutMain } from '../../common/components/Layout'
import Topbar from '../../common/components/Topbar'
import { BackTo } from '../../common/components/BackTo'
import { fetchUserInfoByLoginname } from './actions'
import { UserActivity } from './components/UserActivity/index'
import { UserPortrait } from './components/UserPortrait/index'

import './index.css'

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
    let user = this.props.user
    let recentTopics = user.recent_topics || []
    let recentReplies = user.recent_replies || []

    return (
      <Layout className="User">
        <LayoutHeader>
          <Topbar title="用户信息">
            <BackTo className="nav-item left"></BackTo>
          </Topbar>
        </LayoutHeader>
        <LayoutMain>
          <UserPortrait avatarUrl={user.avatar_url} loginname={user.loginname} githubUsername={user.githubusername}></UserPortrait>
          <div className="activities">
            <UserActivity type="最近创建的话题" topics={recentTopics} className="bottom-bordered top-bordered"></UserActivity>
            <UserActivity type="最近参与的话题" topics={recentReplies} className="bottom-bordered top-bordered"></UserActivity>
          </div>
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