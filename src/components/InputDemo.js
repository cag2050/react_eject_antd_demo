import React from 'react'
import {Input} from 'antd';

class InputDemo extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location)
    console.log(nextProps)
    console.log(this.props.location)
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
