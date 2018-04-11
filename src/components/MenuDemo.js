import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom'

const MenuDemo = withRouter(({history}) => {
  return (
    <div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']} selectedKeys={[history.location.pathname]}>
        <Menu.Item key="/">
          <Icon type="user"/>
          <span>button</span>
          <NavLink to='/'></NavLink>
        </Menu.Item>
        <Menu.Item key="/input">
          <Icon type="video-camera"/>
          <span>input</span>
          <NavLink to='/input'></NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload"/>
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </div>
  )
})

export default MenuDemo
