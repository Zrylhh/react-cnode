import React from 'react'
import Layout, { LayoutMain } from '../../common/components/Layout'

export default class NotFund extends React.PureComponent {
  render () {
    let { location, history } = this.props
    return (
      <Layout>
        <LayoutMain>
          <h2 className="title">
            Not Fund
          </h2>
          <p>{location.pathname} is not found</p>
          <p>go back? <button className="btn btn-back" onClick={() => {history.go(-1)}}>Back</button></p>
        </LayoutMain>
      </Layout>
    )
  }
}