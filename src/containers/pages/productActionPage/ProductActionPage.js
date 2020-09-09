import { Input, Select, Form, Button, InputNumber, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as contentActions from "../../../actions/contentActions";
import { withRouter } from "react-router-dom";
const { Title } = Typography;

class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      image: "",
      price: "",
      status: true,
      description: "",
    };
  }

  componentDidMount() {
    const { match, contentActions } = this.props;
    const { id } = match.params;
    const { actGetProductRequest } = contentActions;
    if (id) {
      actGetProductRequest(id);
    }
  }
  componentDidUpdate() {
    const { itemEditing, match } = this.props;
    if (match.params.id && this.state.id !== itemEditing.id) {
      this.setState({
        id: itemEditing.id,
        name: itemEditing.name,
        image: itemEditing.image,
        price: itemEditing.price,
        status: itemEditing.status,
        description: itemEditing.description,
      });
    }
  }

  onFinish = (values) => {
    const { contentActions, history } = this.props;
    const { actAddProductRequest, actUpdateProductRequest, clearProductItem } = contentActions;
    const { id } = this.state;
    const newValues = { id, ...values };
    if (id) {
      actUpdateProductRequest(newValues);
      clearProductItem();
    } else {
      actAddProductRequest(values);
    }
    history.goBack();
  };
  onCancel = () => {
    const { history, contentActions } = this.props;
    const { clearProductItem } = contentActions;
    clearProductItem();
    history.goBack();
  };
  render() {
    const { loading } = this.props;
    const { id, name, image, price, status, description } = this.state;
    return (
      <>
        {loading ? null : (
          <div className="input-text">
            <Title level={2}>{id ? "Sửa Sản Phẩm" : "Thêm sản phẩm"}</Title>
            <Form onFinish={this.onFinish}>
              <Form.Item
                label="Tên Sản Phẩm"
                name="name"
                initialValue={name}
                rules={[{ required: true, message: "Please input product name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Ảnh Sản Phẩm"
                name="image"
                initialValue={image}
                rules={[{ required: true, message: "Please input product image!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Giá Sản Phẩm"
                name="price"
                initialValue={price}
                rules={[{ required: true, message: "Please input product price!" }]}
              >
                <InputNumber formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
              </Form.Item>
              <Form.Item label="Trạng Thái" name="status" initialValue={status} rules={[{ required: true }]}>
                <Select>
                  <Select.Option value={true}>Còn Hàng</Select.Option>
                  <Select.Option value={false}>Hết Hàng</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Mô tả"
                name="description"
                initialValue={description}
                rules={[{ required: true, message: "Please input product description!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Xác nhận
                </Button>
                <Button type="primary" danger onClick={this.onCancel}>
                  Hủy Bỏ
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditingReducer,
    loading: state.loadingReducer.loadingUI,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    contentActions: bindActionCreators(contentActions, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductActionPage));
