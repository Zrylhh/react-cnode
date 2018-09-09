import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.css'

export class BackTo extends React.PureComponent {
  static propTypes = {
    to: PropTypes.string,
    btnText: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    btnText: '返回'
  }

  constructor(props) {
    super(props)
    this.goback = this.goback.bind(this)
  }

  goback () {
    let history = this.props.history
    let to = this.props.to
    try {
      history.go(-1)
    } catch (e) {
      window.location.href = to || '/'
    }
  }

  render () {
    let { to, className='' } = this.props
    if (Link && to) {
      return (
        <Link to={to} className={className}>
          <button className="btn btn-back">
            <i className="fas fa-chevron-left"></i>
            <span>{this.props.children || (this.props.btnText || null)}</span>
          </button>
        </Link>
      )
    }
    return  (
      <button className={className} onClick={this.goback}>
        <i className="fas fa-chevron-left"></i>
        <span>{this.props.children || (this.props.btnText || null)}</span>
      </button>
    )
  }
}


