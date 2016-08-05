import React from "react";

export default class Item extends React.Component {
  render() {
    return (
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
    )
  }
}

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};