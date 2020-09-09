import React, { Component } from "react";
import * as contentActions from "../../../actions/contentActions";
import * as modalActions from "../../../actions/modalActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DeleteModal from "../../../components/modal/DeleteModal";

class ModalActionPage extends Component {
  onDeleteProduct = () => {
    const { contentActions, id } = this.props;
    const { actDeleteProductRequest } = contentActions;
    actDeleteProductRequest(id);
  };
  render() {
    const { visibleDelete, modalActions, name } = this.props;
    const { hideModalDelete } = modalActions;

    return (
      <DeleteModal
        visibleDelete={visibleDelete}
        hideModal={hideModalDelete}
        name={name}
        onDelete={this.onDeleteProduct}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    visibleDelete: state.modalReducer.visibleDelete,
    name: state.modalReducer.productName,
    id: state.modalReducer.productId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    contentActions: bindActionCreators(contentActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalActionPage);
