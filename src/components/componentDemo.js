import React from 'react'
import PropTypes from 'prop-types'

class componentDemo extends React.Component {
  constructor(props) {
    // 只有一个理由需要传递props作为super()的参数，那就是你需要在构造函数内使用this.props
    // 官方提供学习的例子中都是写成super(props)，所以说写成super(props)是完全没问题的，也建议就直接这样写
    super(props)
    this.state = {
      key1: 'value1'
    }
    // console.log(this.props)
    // console.log(this.state)
  }

  // defaultProps 用来确保 this.props.title 在父组件没有特别指定的情况下，有一个初始值。
  // 类型检查发生在 defaultProps 赋值之后，所以类型检查也会应用在 defaultProps 上面。
  static defaultProps = {
    title: 'defaultTitle'
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        componentDemo: <br/>
        state值：'key1': {this.state.key1} <br/>
        页面路径：{this.props.location.pathname} <br/>
        title（从props中得到）： {this.props.title}
      </div>
    )
  }
}

export default componentDemo
