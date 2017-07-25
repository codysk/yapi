import React, { Component } from 'react'
import { Tabs } from 'antd'
import Mock from 'mockjs'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
console.log('测试')
@connect(
  state => {
    return {
      resParams: state.addInterface.resParams,
      reqParams: state.addInterface.reqParams
    }
  }
)

class Result extends Component {
  static propTypes = {
    resParams: PropTypes.string,
    reqParams: PropTypes.string,
    isSave: PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  render () { 
    let TabPane = Tabs.TabPane
    let resParams = ''
    let json = ''
    
    if(this.props.resParams){
      resParams = JSON.parse(this.props.resParams)
      json = JSON.stringify(Mock.mock(resParams), null, 2)
    }

    return (
      <div className="result">
        <strong className="res-h3">返回示例 :</strong>
        <Tabs defaultActiveKey="1">
          <TabPane tab="成功结果" key="1">
            <pre>{json}</pre>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Result