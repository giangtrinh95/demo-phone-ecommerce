import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Spin, Typography } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";

const { Text } = Typography;

class LoginPage extends Component {
  onFinish = (values) => {
    const { userActions } = this.props;
    const { login } = userActions;
    login(values);
  };
  render() {
    const { loading, isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Card title={<Text underline>Login</Text>}>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" disabled={loading}>
              {loading ? <Spin /> : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    loading: state.loadingReducer.loadingUI,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
