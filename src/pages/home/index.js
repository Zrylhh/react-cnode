import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import Layout, { LayoutHeader, LayoutMain } from '../../common/components/Layout'

import Topic from './components/Topic'
import TopicPlaceholder from './components/Placeholder'

import { connect } from 'react-redux'
import { fetchTopics } from './actions'
import POST_TYPES from '../../constants/post-types'

import './index.css'
import 'react-dropdown/style.css'

export class Home extends Component {
  componentDidMount () {
    this.props.fetchTopics()
  }

  getTopicsJsx () {
    let topics = this.props.topics.items
    if (topics && topics.length) {
      return (
        <ul>
          {
            topics.map(topic => {
              return (
                <li key={topic.id}><Topic {...topic}></Topic></li>
              )
            })
          }
        </ul>
      )
    }
    return <TopicPlaceholder></TopicPlaceholder>
  }

  render () {
    let topicsJsx = this.getTopicsJsx()
    return (
      <Layout className="Home">
        <LayoutHeader>
          <div className="Topbar flex-row-between align-center">
            <Dropdown
                options={POST_TYPES}
                value={this.props.topics && this.props.topics.type}
                placeholder="全部"
                onChange={(option) => {
                  this.props.fetchTopics(option, 1)
                  return option
                }}
            >
            </Dropdown>
          </div>
        </LayoutHeader>
        <LayoutMain className={this.props.topics && this.props.topics.items ? 'topics-wrapper initial-loaded' : 'topics-wrapper'}>
          {topicsJsx}
        </LayoutMain>
      </Layout>
    )
  }
}

function mapStatetoProps (state) {
  return {
    topics: state.topics
  }
}

export default connect(
  mapStatetoProps,
  {
    fetchTopics
  }
)(Home)