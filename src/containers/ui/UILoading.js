import React, { Component } from "react";
import Loading from "../../components/loading/Loading";
import { connect } from "react-redux";

class UILoading extends Component {
  render() {
    const { loading } = this.props;
    return loading ? <Loading /> : null;
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loadingReducer.loadingUI,
  };
};
export default connect(mapStateToProps, null)(UILoading);
