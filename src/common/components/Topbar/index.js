import React from 'react'
import { PropTypes } from 'prop-types'
import './index.css'


export default class Topbar extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    let { title } = this.props
    return (
      <nav className="Topbar">
        <span className="Topbar-title weight-bold">{title}</span>
        {this.props.children}
      </nav>
    )
  }
}
