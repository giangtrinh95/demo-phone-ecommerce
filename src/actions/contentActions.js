import qs from "query-string";
import * as Types from "../constants/ActionTypes";
import callApi from "../utils/callApi";
import * as ui from "./loadingActions";
// export const fetchProductList = () => (dispatch) => {
//   dispatch(ui.showLoadingUI());
//   return callApi("products", "GET", null, configToken)
//     .then((res) => {
//       dispatch(showProductSuccess(res.data));
//       dispatch(ui.hideLoadingUI());
//     })
//     .catch((error) => {
//       dispatch(showProductFailed(error));
//       dispatch(ui.hideLoadingUI());
//     });
// };
export const clearProductList = () => {
  return {
    type: Types.CLEAR_PRODUCT,
  };
};
// export const showProductSuccess = (data) => {
//   return {
//     type: Types.SHOW_PRODUCT_SUCCESS,
//     payload: {
//       data,
//     },
//   };
// };
// export const showProductFailed = (error) => {
//   return {
//     type: Types.SHOW_PRODUCT_FAILED,
//     payload: {
//       error,
//     },
//   };
// };
export const fetchProductListPage = (params) => {
  const queryParams = qs.stringify(params);
  return (dispatch) => {
    dispatch(ui.showLoadingUI());
    return callApi(`products?${queryParams}`, "GET", null)
      .then((res) => {
        dispatch(showProductListPageSuccess(res.data));
        dispatch(ui.hideLoadingUI());
        // console.log(res.headers["x-total-count"]);
      })
      .catch((error) => {
        dispatch(showProductListPageFailed(error));
        dispatch(ui.hideLoadingUI());
      });
  };
};

export const showProductListPageSuccess = (data) => {
  return {
    type: Types.SHOW_PRODUCT_LIST_PAGE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const showProductListPageFailed = (error) => {
  return {
    type: Types.SHOW_PRODUCT_LIST_PAGE_FAILED,
    payload: {
      error,
    },
  };
};

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    dispatch(ui.showLoadingUI());

    return callApi(`products/${id}`, "DELETE", null)
      .then((res) => {
        dispatch(actDeleteProductSuccess(id));
        dispatch(ui.hideLoadingUI());
      })
      .catch((error) => {
        dispatch(actDeleteProductFailed(error));
        dispatch(ui.hideLoadingUI());
      });
  };
};
export const actDeleteProductSuccess = (id) => {
  return {
    type: Types.DELETE_PRODUCT_SUCCESS,
    payload: {
      id,
    },
  };
};

export const actDeleteProductFailed = (error) => {
  return {
    type: Types.DELETE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    dispatch(ui.showLoadingUI());
    return callApi(`products/${id}`, "GET", null)
      .then((res) => {
        dispatch(actGetProductSuccess(res.data));
        dispatch(ui.hideLoadingUI());
      })
      .catch((error) => {
        dispatch(actGetProductFailed(error));
        dispatch(ui.hideLoadingUI());
      });
  };
};
export const actGetProductSuccess = (product) => {
  return {
    type: Types.GET_PRODUCT_SUCCESS,
    payload: {
      product,
    },
  };
};

export const actGetProductFailed = (error) => {
  return {
    type: Types.GET_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
export const clearProductItem = () => {
  return {
    type: Types.CLEAR_PRODUCT_ITEM,
  };
};
export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, "PUT", product)
      .then((res) => {
        dispatch(actUpdateProductSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actUpdateProductFailed(error));
      });
  };
};
export const actUpdateProductSuccess = (product) => {
  return {
    type: Types.UPDATE_PRODUCT_SUCCESS,
    payload: {
      product,
    },
  };
};
export const actUpdateProductFailed = (error) => {
  return {
    type: Types.UPDATE_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product)
      .then((res) => {
        dispatch(actAddProductSucces(res.data));
      })
      .catch((error) => {
        dispatch(actAddProductFailed(error));
      });
  };
};
export const actAddProductSucces = (product) => {
  return {
    type: Types.ADD_PRODUCT_SUCCESS,
    payload: {
      product,
    },
  };
};
export const actAddProductFailed = (error) => {
  return {
    type: Types.ADD_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
