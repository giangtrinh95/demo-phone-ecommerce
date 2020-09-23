import React, { Component } from "react";
import { Tag, Button } from "antd";
import { Link } from "react-router-dom";
class Product extends Component {
  render() {
    const { product, index, showModal } = this.props;
    const checkStatus = product.status ? <Tag color="geekblue">Còn Hàng</Tag> : <Tag color="red">Hết Hàng</Tag>;
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{`${product.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
          <td style={{ textAlign: "center" }}>{checkStatus}</td>
          <td>{product.description}</td>
          <td>
            <Button type="primary" htmlType="submit">
              <Link to={`/edit-product/${product.id}`}>Sửa</Link>
            </Button>
            <Button type="primary" danger onClick={() => showModal(product.id, product.name)}>
              Xóa
            </Button>
          </td>
        </tr>
      </>
    );
  }
}
export default Product;
