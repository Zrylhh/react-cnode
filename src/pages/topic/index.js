import React, { Component } from 'react'
import Layout, { LayoutHeader, LayoutMain, LayoutFooter } from '../../common/components/Layout'

export default class Topic extends Component {
  render () {
    return (
      <Layout>
        <LayoutHeader></LayoutHeader>
        <LayoutMain>
          <h2 className="title">Topic</h2>
        </LayoutMain>
        <LayoutFooter></LayoutFooter>
      </Layout>
    )
  }
}
