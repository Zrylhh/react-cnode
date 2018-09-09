import React from 'react'

import './index.css'

export default class Layout extends React.PureComponent {
  render () {
    let className = 'Layout ' + (this.props.className || '')
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export class LayoutMain extends React.PureComponent {
  render () {
    let className = 'LayoutMain ' + (this.props.className || '')
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export class LayoutFooter extends React.PureComponent {
  render () {
    let className = 'LayoutFooter ' + (this.props.className || '')
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export class LayoutHeader extends React.Component {
  render () {
    let className = 'LayoutHeader ' + (this.props.className || '')
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
