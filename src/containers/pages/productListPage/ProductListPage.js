import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as contentActions from "../../../actions/contentActions";
import * as modalActions from "../../../actions/modalActions";
import Product from "../../../components/content/Product";
import ProductList from "../../../components/content/ProductList";

class ProductListPage extends Component {
  onShowModal = (id, name) => {
    const { modalActions } = this.props;
    const { showModalDelete } = modalActions;
    showModalDelete(id, name);
  };

  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product product={product} key={product.id} index={index} showModal={this.onShowModal} />;
      });
    }
    return result;
  };

  render() {
    const { products } = this.props;
    return <ProductList>{this.showProducts(products)}</ProductList>;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.contentReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    contentActions: bindActionCreators(contentActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductListPage));
