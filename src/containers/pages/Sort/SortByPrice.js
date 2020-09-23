import { Button, Dropdown } from "antd";
import React, { Component } from "react";
import Sort from "../../../components/content/Sort";
import { DownOutlined } from "@ant-design/icons";
import qs from "query-string";
import { withRouter } from "react-router-dom";

class SortByPrice extends Component {
  handleSort = (type) => {
    const { history, location } = this.props;
    const { search } = location;
    const { keyword } = qs.parse(search);
    if (keyword) {
      history.push({
        pathname: "/product-list/search",
        search: `?keyword=${keyword}&order=${type}&page=1&sortBy=price`,
      });
    } else {
      history.push({
        pathname: "/product-list",
        search: `?order=${type}&page=1&sortBy=price`,
      });
    }
  };
  render() {
    return (
      <Dropdown overlay={<Sort handleSort={this.handleSort} />}>
        <Button className="sort-by-price">
          Sắp Xếp <DownOutlined />
        </Button>
      </Dropdown>
    );
  }
}

export default withRouter(SortByPrice);
