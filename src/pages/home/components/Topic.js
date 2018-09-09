import React from 'react'
import { NavLink as Link } from 'react-router-dom'

import {
  VisitMeta,
  TopicTabMeta,
  CreatedMeta
} from '../../../common/components/TopicMeta'

import './Topic.css'

const Topic = (props) => {
  let { title, id, last_reply_at, reply_count, visit_count, top, good, tab, author, create_at } = props
  return (
    <Link className="TopicItem bottom-bordered" to={`/topic/${id}`}>
      <div className="topic-meta flex-row-between">
        <TopicTabMeta isTop={top} isGood={good} tab={tab}></TopicTabMeta>
        <CreatedMeta authorLoginname={author.loginname} createdAt={create_at}></CreatedMeta>
      </div>
      <h4 className="TopicItem-title weight-bold omitedsymbol">{title}</h4>
      <div className="topic-meta flex-row-between align-center">
        <VisitMeta visitCount={visit_count} replyCount={reply_count}></VisitMeta>
        <CreatedMeta createdAt={last_reply_at}></CreatedMeta>
      </div>
    </Link>
  )
}

export default Topic
