import React from "react";
import {Col, Badge} from "react-bootstrap";

const Suggestion = ({display_name, category, score, sm}) =>
        <Col sm={sm}>
          <h4>{display_name} <Badge>{score.toPrecision(2)}</Badge></h4>
          <p>{category}</p>
        </Col>
    ;

Suggestion.propTypes = {
  category: React.PropTypes.string.isRequired,
  display_name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  sm: React.PropTypes.number
};

Suggestion.defaultProps = {
  sm: 4
};

export default Suggestion;