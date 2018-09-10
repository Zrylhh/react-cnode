import React, { Component } from 'react'

import Layout, { LayoutHeader, LayoutMain, LayoutFooter } from '../../common/components/Layout'
import Topbar from '../../common/components/Topbar'
import { BackTo } from '../../common/components/BackTo'
import { VisitMeta, CreatedMeta } from '../../common/components/TopicMeta/index'

import { connect } from 'react-redux'
import { fetchTopicById } from './actions'

import './index.css'
import { ReplyItem } from './components/ReplyItem/index';

export class Topic extends Component {
  componentDidMount () {
    this.loadTopicItem()
  }

  loadTopicItem () {
    let { match } = this.props
    let topicId = match.params.topicId

    if(topicId === this.props.viewedTopic.id) {
       return
    }
    this.props.fetchTopicById(topicId)
  }

  render () {
    let topicItem = this.props.viewedTopic
    let content = topicItem.content
    let replies = topicItem.replies || []
    return (
      <Layout className="Topic">
        <LayoutHeader>
          <Topbar title="主题详情">
            <BackTo className="nav-item left"></BackTo>
          </Topbar>
        </LayoutHeader>
        <LayoutMain className="Topic-detail">
          <div className="Topic-content">
            <header className="content-brief bottom-bordered">
              <h2 className="title weight-bold">{topicItem.title}</h2>
              <div className="meta-info flex-row-between align-center">
                <VisitMeta replyCount={topicItem.reply_count} visitCount={topicItem.visit_count} iconColor="blue"></VisitMeta>
                <CreatedMeta authorLoginname={topicItem.author && topicItem.author.loginname} createdAt={topicItem.create_at}></CreatedMeta>
              </div>
            </header>
            <div className="content-detail bottom-bordered top-bordered" dangerouslySetInnerHTML={{__html: content || ''}}>
            </div>
          </div>
          <div className="Topic-replies top-bordered">
            <h4 className="title weight-bold">回复</h4>
            <ul>
              {
                replies.map((reply, index) => {
                  return (
                    <li key={reply.id}>
                      <ReplyItem {...reply} floor={index + 1}></ReplyItem>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </LayoutMain>
        <LayoutFooter></LayoutFooter>
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    viewedTopic: state.viewedTopic
  }
}

export default connect(
  mapStateToProps,
  {
    fetchTopicById
  }
)(Topic)
