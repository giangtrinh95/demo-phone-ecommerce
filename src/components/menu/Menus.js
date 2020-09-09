import React, { Component } from "react";
import { Menu, Dropdown, Avatar, Tooltip } from "antd";
import { DownOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import DropMenuPage from "../../containers/pages/menuActionPage/DropMenuPage";
const text = (
  <span className="tooltip-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, perspiciatis facilis ipsam dolorem tenetur libero
    saepe non suscipit aut ea unde doloremque amet sunt. Aspernatur nostrum dolores explicabo itaque
    quisquam!asdasdasdasdadasdasdasdasds
  </span>
);

class Menus extends Component {
  render() {
    return (
      <>
        <Menu theme="dark" mode="horizontal" selectedKeys={null}>
          <Menu.Item className="none-active ">
            <div className="tooltip">
              <Tooltip placement="leftTop" title={text} style={{ backgroundColor: "red" }}>
                <BellOutlined />
                Thông báo
              </Tooltip>
            </div>
          </Menu.Item>
          <Menu.Item className="none-active ">
            <Avatar icon={<UserOutlined />} />
          </Menu.Item>
          <Menu.Item className="none-active ">
            <Dropdown overlay={<DropMenuPage />}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} href="/#">
                Cá nhân <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}
export default Menus;
