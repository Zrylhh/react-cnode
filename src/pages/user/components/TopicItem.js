import React from 'react'
import { Link } from 'react-router-dom'
import { CreatedMeta } from '../../../common/components/TopicMeta'

import './TopicItem.css'

export const TopicItem = (props) => {
  let { to, title, lastReply, className = '', author } = props
  return (
    <Link to={to} className={'TopicItem bottom-bordered' + className}>
      <div className="TopicItem-title omitedsymbol weight-bold">{title}</div>
      <div className="meta-info flex-row-between align-center">
        {author ? <CreatedMeta authorLoginname={author.loginname}  createdAt={lastReply}></CreatedMeta> : null}
        <CreatedMeta createdAt={lastReply}></CreatedMeta>
      </div>
    </Link>
  )
}