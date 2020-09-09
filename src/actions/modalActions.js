import * as Types from "../constants/ActionTypes";
export const showModalDelete = (id, name) => {
  return {
    type: Types.SHOW_MODAL_DELETE,
    payload: {
      id,
      name,
    },
  };
};
export const hideModalDelete = () => {
  return {
    type: Types.HIDE_MODAL_DELETE,
  };
};
