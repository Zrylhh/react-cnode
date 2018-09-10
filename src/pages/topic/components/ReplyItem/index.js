import React from 'react'
import { AuthorMeta, CreatedMeta } from '../../../../common/components/TopicMeta'
import './index.css'

export const ReplyItem = (props) => {
  let { author = {}, content = '', ups = 0, floor = 1, create_at} = props
  return (
    <div className="ReplyItem bottom-bordered">
      <div className="meta-info flex-row-between align-center">
        <AuthorMeta className="reply-author flex-row-between align-center" avatarUrl={author.avatar_url} loginname={author.loginname} to={`/user/${author.loginname}`}></AuthorMeta>
        <CreatedMeta createdAt={create_at} timePfrefix="创建于"></CreatedMeta>
      </div>
      <div className="reply-content">
        <div  dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
      <div className="meta-info flex-row-between align-center">
        <span className="reply-floor">{floor}楼</span>
        <div className="others flex-row-between align-center">
          <span className="ups-data">
            <i className="far fa-thumbs-up"></i>
            {ups.length}
          </span>
          <button className="btn btn-reply"><i className="far fa-comment-alt"></i>回帖</button>
        </div>
      </div>
    </div>
  )
}
