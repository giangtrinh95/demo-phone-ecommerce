import { Modal, Typography } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
const { Text } = Typography;
class DeleteModal extends React.Component {
  handleOk = (hideModal, onDelete) => {
    onDelete();
    hideModal();
    this.props.history.push("/product-list");
  };

  handleCancel = (hideModal) => {
    hideModal();
    this.props.history.push("/product-list");
  };

  render() {
    const { visibleDelete, hideModal, onDelete, name } = this.props;
    return (
      <>
        <Modal
          style={{ textAlign: "center" }}
          title="Bạn có chắc chắn muốn xóa sản phẩm?"
          visible={visibleDelete}
          onCancel={() => this.handleCancel(hideModal)}
          onOk={() => this.handleOk(hideModal, onDelete)}
          className="delete-modal"
        >
          <Text>{name}</Text>
        </Modal>
      </>
    );
  }
}
export default withRouter(DeleteModal);
