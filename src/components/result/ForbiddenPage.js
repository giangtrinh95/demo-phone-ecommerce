import React, { Component } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
export default class ForbiddenPage extends Component {
  render() {
    const { error } = this.props;
    return (
      <Result
        status="403"
        title="403"
        subTitle={error}
        extra={
          <Button type="primary">
            <Link to="/hihi">Back Home</Link>
          </Button>
        }
      />
    );
  }
}
