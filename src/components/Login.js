import React from 'react'
import { Button } from 'antd'
import history from '../projectTools/history'

class Login extends React.Component {

  loginMethod = () => {
    localStorage.setItem('isLogin', 'true')
    history.push('/')
  }

  render() {
    return (
      <div>
        <div>Login 页面</div>
        <Button onClick={this.loginMethod}>点击模拟登陆</Button>
      </div>

    )
  }
}

export default Login
