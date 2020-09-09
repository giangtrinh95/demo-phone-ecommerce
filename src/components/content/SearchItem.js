import React, { Component } from "react";
import Search from "antd/lib/input/Search";

class SearchItem extends Component {
  render() {
    const { keyword, onSearch } = this.props;

    return <Search placeholder="Nhập từ khóa" onSearch={onSearch} enterButton defaultValue={keyword} />;
  }
}
export default SearchItem;
