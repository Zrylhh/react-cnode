import React from 'react'
import { Link } from 'react-router-dom'
import { CreatedMeta } from '../../../../common/components/TopicMeta'

import PropTypes  from 'prop-types'

import './index.css'

export const TopicItem = (props) => {
  let { to, title, lastReply, className = '', author } = props
  return (
    <Link to={to} className={'TopicItem ' + className}>
      <h3 className="TopicItem-title omitedsymbol weight-bold">{title}</h3>
      <div className="meta-info flex-row-between align-center">
        {author ? <CreatedMeta authorLoginname={author.loginname}  createdAt={lastReply}></CreatedMeta> : null}
        <CreatedMeta createdAt={lastReply}></CreatedMeta>
      </div>
    </Link>
  )
}

TopicItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.object,
  lastReply: PropTypes.string.isRequired
}