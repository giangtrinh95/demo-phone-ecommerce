import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../../actions/userActions";
import { bindActionCreators } from "redux";
import * as contentActions from "../../../actions/contentActions";
import DropMenu from "../../../components/menu/DropMenu";
class DropMenuPage extends Component {
  logout = () => {
    const { logoutAction, contentActions } = this.props;
    const { clearProductList, clearProductItem } = contentActions;
    logoutAction();
    clearProductList();
    clearProductItem();
  };
  render() {
    const { name } = this.props;
    return <DropMenu logout={this.logout} name={name} />;
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: () => {
      return dispatch(logout());
    },
    contentActions: bindActionCreators(contentActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DropMenuPage);
