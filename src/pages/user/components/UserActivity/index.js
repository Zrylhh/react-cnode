import React from 'react'
import { TopicItem } from '../TopicItem'
import PropTypes from 'prop-types'

import './index.css'

export class UserActivity extends React.PureComponent {
  renderTopics () {
    let topics = this.props.topics
    if (topics.length === 0) {
      return <p className="no-activity">暂时没任何活动</p>
    }
    return (
      <ul>
        {
          topics.map(topic => {
            return (
              <li key={topic.id}>
                <TopicItem
                    className="bottom-bordered"
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
    )
  }

  render () {
    let {type, className = '' } = this.props
    let topicListJsx = this.renderTopics()
    return (
      <div className={'UserActivity ' + className}>
        <h3 className="Activity-title weight-bold">{type}</h3>
        <div className="topics">
          {topicListJsx}
        </div>
      </div>
    )
  }
}

UserActivity.PropType = {
  type: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired,
  className: PropTypes.string
}
