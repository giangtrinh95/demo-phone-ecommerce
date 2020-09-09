import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class DropMenu extends Component {
  render() {
    const { name, logout } = this.props;
    return (
      <Menu theme="dark">
        <Menu.Item>
          <Link to="" target="_blank">
            {name}
          </Link>
        </Menu.Item>
        <Menu.Item onClick={logout}>Logout</Menu.Item>
      </Menu>
    );
  }
}
export default DropMenu;
