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
    const { page, keyword, sortBy, order } = qs.parse(search);
    if (keyword && sortBy) {
      fetchProductListPage({ q: keyword, _sort: "price", _order: order, _page: page });
    } else if (sortBy) {
      fetchProductListPage({ _sort: "price", _order: order, _page: page });
    } else if (keyword) {
      fetchProductListPage({ _page: page, q: keyword });
    } else if (!page) {
      fetchProductListPage({ _page: 1 });
    } else {
      fetchProductListPage({ _page: page });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { location, contentActions } = this.props;
    const { fetchProductListPage } = contentActions;
    const { search } = location;
    const { page, keyword, sortBy, order } = qs.parse(search);
    if (location !== prevProps.location) {
      if (keyword && sortBy) {
        fetchProductListPage({ q: keyword, _sort: "price", _order: order, _page: page });
      } else if (sortBy) {
        fetchProductListPage({ _sort: "price", _order: order, _page: page });
      } else if (keyword) {
        fetchProductListPage({ _page: page, q: keyword });
      } else if (!page) {
        fetchProductListPage({ _page: 1 });
      } else {
        fetchProductListPage({ _page: page });
      }
    }
  }
  handlePagination = (page, pageSize) => {
    const { history, location } = this.props;
    const { search } = location;
    const { keyword, sortBy, order } = qs.parse(search);
    if (keyword && sortBy) {
      history.push({
        pathname: "/product-list/search",
        search: `?keyword=${keyword}&order=${order}&page=${page}&sortBy=${sortBy}`,
      });
    } else if (sortBy) {
      history.push({
        pathname: "/product-list",
        search: `?order=${order}&page=${page}&sortBy=${sortBy}`,
      });
    } else if (keyword) {
      history.push({
        pathname: "/product-list/search",
        search: `?keyword=${keyword}&page=${page}`,
      });
    } else {
      if (page === 1) {
        history.push("/product-list");
      } else {
        history.push({
          pathname: "/product-list",
          search: `?page=${page}`,
        });
      }
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
