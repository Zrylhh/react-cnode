import React from 'react'

import './index.css'

export default class Layout extends React.PureComponent {
  render () {
    return (
      <div className="Layout">
        {this.props.children}
      </div>
    )
  }
}

export class LayoutMain extends React.PureComponent {
  render () {
    return (
      <div className="LayoutMain">
        {this.props.children}
      </div>
    )
  }
}

export class LayoutFooter extends React.PureComponent {
  render () {
    return (
      <div className="LayoutFooter">
        {this.props.children}
      </div>
    )
  }
}

export class LayoutHeader extends React.Component {
  render () {
    return (
      <div className="LayoutHeader">
        {this.props.children}
      </div>
    )
  }
}
