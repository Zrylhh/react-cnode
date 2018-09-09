import React from 'react'
import { Tab_Types_Map } from '../../../constants/post-types'
import { NavLink as Link } from 'react-router-dom'

import './index.css'

export const VisitMeta = (props) => {
  let { visitCount, replyCount, iconColor = ''} = props
  return (
    <div className={'visit-meta ' + iconColor}>
      <span className="like"><i className="far fa-eye"></i><i>{visitCount}</i></span>
      <span className="comment"><i className="far fa-comment-alt"></i><i>{replyCount}</i></span>
    </div>
  )
}

export const TopicTabMeta = (props) => {
  let { isGood, isTop, tab, bordered } = props
  return (
    <div className="tab-meta">
      {isGood ? <span className={'red' + (bordered ? 'has-border' : '')}>精华帖</span> : null}
      {isTop ? <span className={'red' + (bordered ? 'has-border' : '')}>置顶</span> : null}
      <span className={'blue' + (bordered ? 'has-border' : '')}>{Tab_Types_Map[tab]}</span>
    </div>
  )
}

export const CreatedMeta = (props) => {
  let { authorLoginname, createdAt } = props
  createdAt = (new Date(createdAt)).toLocaleTimeString()
  if (authorLoginname) {
    return (
      <div className="created-meta flex-row-between align-center">
        <Link to={`/user/${authorLoginname}`} className="author">{authorLoginname}</Link>
        <span> 创建于: </span>
        <span>{createdAt}</span>
      </div>
    )
  }
  return (
    <div className="created-meta">
      <span>最近回复: ${createdAt}</span>
    </div>
  )
}

export const AuthorMeta = (props) => {
  let { avatarUrl, loginname, to = undefined } = props
  if (to) {
    return (
      <Link to={to} className="AuthorMeta">
        <img src={avatarUrl} alt="" className="avatar"/>
        <span className="author-name">{loginname}</span>
      </Link>
    )
  }
  return (
    <div className="AuthorMeta">
      <img src={avatarUrl} alt="" className="avatar"/>
      <span className="author-name">{loginname}</span>
    </div>
  )
}
