import { Menu } from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import qs from "query-string";

class Sort extends Component {
  render() {
    const { handleSort, location } = this.props;
    const { search } = location;
    const { order } = qs.parse(search);
    return (
      <Menu theme="dark" defaultSelectedKeys={[order]} key={order}>
        <Menu.Item key="asc" onClick={() => handleSort("asc")}>
          Giá: Thấp đến Cao
        </Menu.Item>
        <Menu.Item key="desc" onClick={() => handleSort("desc")}>
          Giá: Cao đến Thấp
        </Menu.Item>
      </Menu>
    );
  }
}
export default withRouter(Sort);
