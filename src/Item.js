import React from "react";
import {Col} from "react-bootstrap";

export default class Item extends React.Component {
  render() {
    return (
        <Col sm={this.props.sm}>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </Col>
    )
  }
}

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  sm: React.PropTypes.number
};

Item.defaultProps = {
  sm: 4
};