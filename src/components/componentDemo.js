import React from 'react'

class componentDemo extends React.Component {
  constructor(props) {
    // 只有一个理由需要传递props作为super()的参数，那就是你需要在构造函数内使用this.props
    // 官方提供学习的例子中都是写成super(props)，所以说写成super(props)是完全没问题的，也建议就直接这样写
    super(props)
    this.state = {
      key1: 'value1'
    }
    console.log(this.props)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        componentDemo: <br/>
        state值：'key1': {this.state.key1} <br/>
        页面路径：{this.props.location.pathname} <br/>
      </div>
    )
  }
}

export default componentDemo
