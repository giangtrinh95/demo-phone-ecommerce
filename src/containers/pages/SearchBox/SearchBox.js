import qs from "query-string";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchItem from "../../../components/content/SearchItem";

class SearchBox extends Component {
  handleSearchBox = (value) => {
    const { history } = this.props;
    const keyword = value.trim();
    if (keyword) {
      history.push({
        pathname: "/product-list/search",
        search: `?keyword=${keyword}&page=1`,
      });
    }
  };
  render() {
    const { location } = this.props;
    const { search } = location;
    const { keyword } = qs.parse(search);
    return <SearchItem onSearch={this.handleSearchBox} keyword={keyword} />;
  }
}

export default withRouter(SearchBox);
