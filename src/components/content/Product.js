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
          <td data-label="STT">{index + 1}</td>
          <td data-label="Mã">{product.id}</td>
          <td data-label="Tên Sản Phẩm">{product.name}</td>
          <td data-label="Giá Sản Phẩm">{`${product.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
          <td data-label="Trạng Thái" style={{ textAlign: "center" }}>
            {checkStatus}
          </td>
          <td data-label="Mô Tả">{product.description}</td>
          <td data-label="Hành Động">
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
