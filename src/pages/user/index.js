import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout, { LayoutHeader, LayoutMain } from '../../common/components/Layout'
import Topbar from '../../common/components/Topbar'
import { BackTo } from '../../common/components/BackTo'
import { AuthorMeta } from '../../common/components/TopicMeta'
import { fetchUserInfoByLoginname } from './actions'
import { TopicItem } from './components/TopicItem'

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
          <div className="basic-info bottom-bordered">
            <AuthorMeta avatarUrl={user.avatar_url} loginname={user.loginname}></AuthorMeta>
            <a href={`https://github.com/${user.githubUsername}`} className="github"><img src="https://github.com/fluidicon.png" alt=""/></a>
          </div>
          <div className="activities">
            <div className="activity activity-type1  bottom-bordered top-bordered">
              <h3 className="title weight-bold">最近创建的话题</h3>
              <div className="topics">
                <ul>
                  {
                    recentTopics.map(topic => {
                      return (
                        <li key={topic.id}>
                          <TopicItem
                              to={`/topic/${topic.id}`}
                              lastReply={topic.last_reply_at}
                              author={topic.author}
                              title={topic.title}
                          ></TopicItem>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="activity activity-type2 replied-topics top-bordered">
              <h3 className="title weight-bold">最近参与的话题</h3>
              <div className="topics">
                <ul>
                  {
                    recentReplies.map(topic => {
                      return (
                        <li key={topic.id}>
                          <TopicItem
                              to={`/topic/${topic.id}`}
                              lastReply={topic.last_reply_at}
                              title={topic.title}
                              author={topic.author}
                          ></TopicItem>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
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