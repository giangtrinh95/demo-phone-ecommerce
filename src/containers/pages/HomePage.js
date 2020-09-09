import { Layout, Spin } from "antd";
import React, { Component, Suspense } from "react";
import { Redirect, Switch, Link } from "react-router-dom";
import Menus from "../../components/menu/Menus";
import Siders from "../../components/sider/Siders";
import logo from "../../media/images/logo.jpg";
import PrivateRoute from "../../privateRoute/PrivateRoute";
import UILoading from "../ui/UILoading";
const { Header, Footer } = Layout;
class HomePage extends Component {
  showPage = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return route.childrens ? (
          route.childrens.map((child) => {
            return child.path !== "*" ? (
              <PrivateRoute path={child.path} exact={child.exact} key={index + child.name}>
                <child.component />
              </PrivateRoute>
            ) : (
              <Redirect to="/dashboard" />
            );
          })
        ) : (
          <PrivateRoute key={index} path={route.path}>
            <route.component />
          </PrivateRoute>
        );
      });
    }
    return result;
  };

  render() {
    const { routes } = this.props;
    return (
      <Layout>
        <Header className="header">
          <Link to="/dashboard">
            <img src={logo} alt="logo.jpg" className="logo" />
          </Link>
          <Menus />
        </Header>
        <UILoading />
        <Layout>
          <Siders routes={routes} />
          <Layout className="site-layout">
            <Suspense fallback={<Spin tip="Loading..." style={{ fontSize: "50px", margin: "200px auto" }} />}>
              <Switch>{this.showPage(routes)}</Switch>
            </Suspense>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default HomePage;
