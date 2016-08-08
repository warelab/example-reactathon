import React from "react";
import {Col} from "react-bootstrap";

export default class Suggestion extends React.Component {
  render() {
    return (
        <Col sm={this.props.sm}>
          <h2>{this.props.category}</h2>
          <p>{this.props.display_name}</p>
        </Col>
    )
  }
}

Suggestion.propTypes = {
  category: React.PropTypes.string.isRequired,
  display_name: React.PropTypes.string.isRequired,
  sm: React.PropTypes.number
};

Suggestion.defaultProps = {
  sm: 4
};