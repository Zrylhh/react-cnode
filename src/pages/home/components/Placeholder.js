import React from 'react'

import './Placeholder.css'

class Placehoder extends React.PureComponent {
  render() {
    return (
      <div className="Placeholder bottom-bordered">
        <div className="ph-item">
          <div className="ph-row flex-row-between">
            <div className="ph-col-2 blue"></div>
            <div className="ph-col-2"></div>
          </div>
        </div>
        <div className="ph-item">
          <div className="ph-row">
            <div className="ph-col-12 big"></div>
          </div>
        </div>
        <div className="ph-item">
          <div className="ph-row flex-row-between">
            <div className="ph-col-2"></div>
            <div className="ph-col-2"></div>
          </div>
        </div>
      </div>
    )
  }
}


export default class TopicPlaceholder extends React.Component {
  render () {
   return (
    <div className="TopicPlaceholder">
      <div className="placeholders">
        <Placehoder></Placehoder>
        <Placehoder></Placehoder>
        <Placehoder></Placehoder>
        <Placehoder></Placehoder>
        <Placehoder></Placehoder>
        <Placehoder></Placehoder>
        <Placehoder></Placehoder>
        <Placehoder></Placehoder>
      </div>
    </div>
   )
  }
}

