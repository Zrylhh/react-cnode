import React from 'react'
import { AuthorMeta } from '../../../../common/components/TopicMeta/index'

import './index.css'

export const UserPortrait = (props) => {
  let { avatarUrl, loginname, githubUsername } = props
  return (
    <div className="UserPortrait">
      <div className="basic-info bottom-bordered">
        <AuthorMeta avatarUrl={avatarUrl} loginname={loginname}></AuthorMeta>
        <a href={`https://github.com/${githubUsername}`} className="github"><img src="https://github.com/fluidicon.png" alt=""/></a>
      </div>
    </div>
  )
}
