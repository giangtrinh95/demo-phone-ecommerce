import React, { Component } from "react";
import loading from "../../media/images/loadingGlobal.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={loading} alt="loading" className="loading-icon" />
      </div>
    );
  }
}
