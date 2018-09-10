import React from 'react'
import Layout, { LayoutMain, LayoutHeader } from '../../common/components/Layout'
import Topbar from '../../common/components/Topbar/index'
import { Link } from 'react-router-dom'

import './index.css'
import notfund from '../../common/imgs/404.jpg'

export default class NotFund extends React.PureComponent {
  render () {
    let { location } = this.props
    return (
      <Layout className="NotFound">
        <LayoutHeader>
          <Topbar title="404"></Topbar>
        </LayoutHeader>
        <LayoutMain>
          <figure className="figure">
            <img src={notfund} alt=""/>
            <h2 className="title">
              Not Fund
            </h2>
            <p className="warn-word">路径<i className="path">{location.pathname}</i> 不存在</p>
          </figure>
          <Link to="/" className="back-home"><button className="btn"><i className="fas fa-chevron-left"></i>返回首页</button></Link>
        </LayoutMain>
      </Layout>
    )
  }
}