import React from 'react'
import {Button} from 'antd';
import history from '../history'

class ButtonDemo extends React.Component {
  linkTo = () => {
    history.push('/input')
  }

  render() {
    return (
      <div>
        <Button onClick={this.linkTo}>BUTTON</Button>
      </div>
    )
  }
}

export default ButtonDemo
