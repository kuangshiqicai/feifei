// import React, { Component } from "react"

// export default class UserAdd extends Component {
//   render() {
//     return <div>UserAdd</div>
//   }
// }
// 自定义Modal使用页面
import React, { Component } from 'react'
import Modal from '../Modal/Modal'
class UserAdd extends Component {
  state={
    isShow:false,
    isShow2:false
  }
  toggle=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
  }
  handleOk=()=>{
    this.setState({
      isShow:false
    })
  }
  handleCancel=()=>{
    this.setState({
      isShow:false
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
        <Modal
          title="custom Modal"
          visible={this.state.isShow}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>自定义Modal</p>
          <p>自定义Modal2233</p>
        </Modal>
      </div>
    )
  }
}

export default UserAdd