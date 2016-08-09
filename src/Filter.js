import React, {PropTypes} from "react";
import {FormControl} from "react-bootstrap";

const Filter = ({filterText, onFilterChange}) =>
    <FormControl
        type="text"
        value={filterText}
        placeholder="Filter items"
        onChange={onFilterChange}
    />
;

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;