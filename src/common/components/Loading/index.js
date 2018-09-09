import React from 'react'

import './index.css'

export default class Loading extends React.Component {
  render () {
    return (
      <div className="Loading">
        <div className="g-loading rectangle-bounce">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    )
  }
}