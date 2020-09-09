import React from "react";
import { DashboardOutlined, MenuOutlined, FormOutlined, TableOutlined } from "@ant-design/icons";

const HomePage = React.lazy(() => import("./containers/pages/HomePage"));
const ProductActionPage = React.lazy(() => import("./containers/pages/productActionPage/ProductActionPage"));
const DashBoard = React.lazy(() => import("./components/DashBoard"));
const ContentPage = React.lazy(() => import("./containers/pages/content/ContentPage"));
const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "DashBoard",
    icon: <DashboardOutlined />,
    component: DashBoard,
  },
  {
    path: "/product-manage", //not use if have children
    exact: true,
    name: "Quản lý sản phẩm",
    icon: <MenuOutlined />,
    component: HomePage,
    childrens: [
      {
        path: "/add-product",
        exact: true,
        name: "Thêm Sản Phẩm",
        icon: <FormOutlined />,
        component: ProductActionPage,
      },
      {
        path: "/edit-product/:id",
        exact: true,
        component: ProductActionPage,
      },
      {
        path: "/product-list",
        exact: false,
        name: "Danh sách sản phẩm",
        icon: <TableOutlined />,
        component: ContentPage,
      },
      {
        path: "*",
        exact: false,
        component: DashBoard,
      },
    ],
  },
];
export default routes;
