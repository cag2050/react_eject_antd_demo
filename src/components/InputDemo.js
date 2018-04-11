import React from 'react'
import {Input} from 'antd';

class InputDemo extends React.Component {
  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div>
        <Input placeholder="Basic usage"></Input>
      </div>
    )
  }
}

export default InputDemo
