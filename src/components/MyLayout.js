import React from 'react'
import {Layout, Icon, Button} from 'antd';
import {
  Switch,
} from 'react-router-dom'
import router from '../router';
import MenuDemo from './MenuDemo'
import PrivateRoute from '../projectTools/PrivateRoute'
import {withRouter} from "react-router";
import history from "../projectTools/history";
import NotFound from "./NotFound";

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

  logout = () => {
    localStorage.removeItem('isLogin')
    history.push('/login')
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
            <Button onClick={this.logout}>退出</Button>
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            <Switch>
              {router.map((route, i) => <PrivateRoute key={i} exact={!!route.exact} path={route.path}
                                                      component={route.component}/>)}
              <PrivateRoute component={NotFound}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MyLayout)
