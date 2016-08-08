import React from "react";
import {Col} from "react-bootstrap";

export default class Suggestion extends React.Component {
  render() {
    return (
        <Col sm={this.props.sm}>
          <h4>{this.props.display_name} <small>{this.props.score.toPrecision(2)}</small></h4>
          <p>{this.props.category}</p>
        </Col>
    )
  }
}

Suggestion.propTypes = {
  category: React.PropTypes.string.isRequired,
  display_name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  sm: React.PropTypes.number
};

Suggestion.defaultProps = {
  sm: 4
};