import React from 'react'
import {Button} from 'antd';
import history from '../projectTools/history'

class ButtonDemo extends React.Component {
  linkTo = () => {
    history.push('/input')
  }

  render() {
    return (
      <div>
        <Button onClick={this.linkTo}>BUTTON：点击后跳转到input页</Button>
      </div>
    )
  }
}

export default ButtonDemo
