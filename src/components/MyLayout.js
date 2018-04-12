import React from 'react'
import {Layout, Icon} from 'antd';
import {
  Route,
  Switch,
  // Redirect
} from 'react-router-dom'
import router from '../router';
import MenuDemo from './MenuDemo'
import Login from './Login'

const {Header, Sider, Content} = Layout;

class MyLayout extends React.Component {

  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"/>
          <MenuDemo/>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', paddingLeft: '20px'}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            <Switch>
              {router.map((route, i) => <Route key={i} exact={!!route.exact} path={route.path}
                                               component={route.component}/>)}
              <Route key='/login' exact path='/login' component={Login}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout
