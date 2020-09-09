import qs from "query-string";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as contentActions from "../../../actions/contentActions";
import PaginationItem from "../../../components/content/PaginationItem";

class PaginationPage extends Component {
  componentDidMount() {
    const { location, contentActions } = this.props;
    const { fetchProductListPage } = contentActions;
    const { search } = location;
    const { page, keyword } = qs.parse(search);

    if (page && keyword) {
      fetchProductListPage({ _page: page, q: keyword });
    } else if (!page) {
      fetchProductListPage({ _page: 1 });
    } else {
      fetchProductListPage({ _page: page });
    }
  }
  handlePagination = (page, pageSize) => {
    const { contentActions, history, location } = this.props;
    const { fetchProductListPage } = contentActions;
    const { search } = location;
    const { keyword } = qs.parse(search);
    if (keyword) {
      history.push({
        pathname: "/product-list",
        search: `?keyword=${keyword}&page=${page}`,
      });
      fetchProductListPage({ _page: page, q: keyword });
    } else {
      if (page === 1) {
        history.push("/product-list");
      } else {
        history.push({
          pathname: "/product-list",
          search: `?page=${page}`,
        });
      }
      fetchProductListPage({ _page: page });
    }
  };

  render() {
    const { location } = this.props;
    const { search } = location;
    const { page } = qs.parse(search);
    return <PaginationItem handlePagination={this.handlePagination} page={page} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    contentActions: bindActionCreators(contentActions, dispatch),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(PaginationPage));
