import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div className="content-table">
        <table id="customers">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá Sản Phẩm</th>
              <th>Trạng Thái</th>
              <th>Mô Tả</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}
export default ProductList;
