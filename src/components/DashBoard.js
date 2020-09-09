import React, { Component } from "react";
import { Typography } from "antd";
const { Title } = Typography;
export default class DashBoard extends Component {
  render() {
    return (
      <Title level={1} style={{ margin: "100px auto" }}>
        Đây Là Trang DashBoard
      </Title>
    );
  }
}
