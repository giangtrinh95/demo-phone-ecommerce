import React, { Component } from "react";
import { Layout } from "antd";
import ModalActionPage from "../modalActionPage/ModalActionPage";
import PaginationPage from "../paginationPage/PaginationPage";
import SearchBox from "../SearchBox/SearchBox";
import ProductListPage from "../productListPage/ProductListPage";
const { Content } = Layout;

export default class ContentPage extends Component {
  render() {
    return (
      <Content>
        <div className="site-layout-background">
          <SearchBox />
          <ModalActionPage />
          <ProductListPage />
          <PaginationPage />
        </div>
      </Content>
    );
  }
}
