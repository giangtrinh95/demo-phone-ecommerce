import { Layout, Menu } from "antd";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;
class Siders extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  showMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return route.childrens ? (
          <SubMenu key={index} icon={route.icon} title={route.name}>
            {route.childrens.map((child, idx) => {
              return child.path !== "*" && child.name ? (
                <Menu.Item key={child.path} icon={child.icon}>
                  <Link to={child.path}>{child.name}</Link>
                </Menu.Item>
              ) : null;
            })}
          </SubMenu>
        ) : (
          <Menu.Item key={route.path} icon={route.icon}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        );
      });
    }
    return result;
  };
  render() {
    const { collapsed } = this.state;
    const { routes } = this.props;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} breakpoint={"xs"}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.location.pathname]}>
          {this.showMenus(routes)}
        </Menu>
      </Sider>
    );
  }
}
export default withRouter(Siders);
