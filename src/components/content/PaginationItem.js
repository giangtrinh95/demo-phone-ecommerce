import { Pagination } from "antd";
import React, { Component } from "react";

class PaginationItem extends Component {
  render() {
    const { page, handlePagination } = this.props;
    return (
      <>
        <Pagination
          total={1000}
          style={{ float: "right", margin: "10px 10px auto" }}
          onChange={handlePagination}
          defaultCurrent={page}
          key={page}
        />
      </>
    );
  }
}

export default PaginationItem;
