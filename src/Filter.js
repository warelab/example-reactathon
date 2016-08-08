import React, {Component, PropTypes} from "react";
import {FormControl} from "react-bootstrap";

export default class Filter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <FormControl
            type="text"
            value={this.props.filterText}
            placeholder="Filter items"
            onChange={(e) => this.props.onFilterChange(e)}
        />
    );
  }
}

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};