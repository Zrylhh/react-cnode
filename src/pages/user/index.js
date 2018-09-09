import React, { Component } from 'react'
import Layout, { LayoutHeader, LayoutMain, LayoutFooter } from '../../common/components/Layout'

export default class User extends Component {
  render () {
    return (
      <Layout>
        <LayoutHeader></LayoutHeader>
        <LayoutMain>
          <h2 className="title">User</h2>
        </LayoutMain>
        <LayoutFooter></LayoutFooter>
      </Layout>
    )
  }
}
