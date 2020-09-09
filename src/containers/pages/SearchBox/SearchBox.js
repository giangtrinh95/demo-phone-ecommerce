import qs from "query-string";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as contentActions from "../../../actions/contentActions";
import SearchItem from "../../../components/content/SearchItem";

class SearchBox extends Component {
  handleSearchBox = (value) => {
    const { history, contentActions } = this.props;
    const { fetchProductListPage } = contentActions;
    const keyword = value.trim();
    if (keyword) {
      history.push({
        pathname: "/product-list/search",
        search: `?keyword=${keyword}&page=1`,
      });
      fetchProductListPage({ _page: 1, q: keyword });
    }
  };
  render() {
    const { location } = this.props;
    const { search } = location;
    const { keyword } = qs.parse(search);
    return <SearchItem onSearch={this.handleSearchBox} keyword={keyword} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    contentActions: bindActionCreators(contentActions, dispatch),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(SearchBox));
