import React from "react";
import {Row, Jumbotron} from "react-bootstrap";

import bacon from "../data/bacon.json";

import Item from "./Item";
import Filter from "./Filter";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: ''
    }
  }

  updateFilterText(filterText) {
    // this is ES6 shorthand for
    // this.setState({ filterText: filterText });
    this.setState({ filterText });
  }

  render() {
    return (
        <div>
          <Jumbotron>
            <h1>Hello World!</h1>
            <p>This is a subtitle.</p>
          </Jumbotron>
          <Filter filterText={this.state.filterText}
                  onFilterChange={(e) => this.updateFilterText(e.target.value)} />

          <Row>
            {this.renderItems()}
          </Row>
        </div>
    );
  }

  getFilteredResults() {
    const filterText = this.state.filterText;

    if(!filterText) {
      return bacon.items;
    }

    return bacon.items.filter((item) => item.text.includes(filterText));
  }

  filteredResultCount() {
    return this.getFilteredResults().length;
  }

  renderItems() {
    /*
    With a for-loop

    const result = [];
    for(let i = 0; i < bacon.items.length; i++) {
      const item = bacon.items[i];
      result.push(
        <Item key={i} title={item.title} text={item.text} />
      );
    }
    return result;

     */


    /*
    Using map:

    return bacon.items.map( function(item) {
      return <Item key={i} title={item.title} text={item.text} />;
    });

     */


    /*
    Using object destructuring:

    return bacon.items.map( function(item) {
      return <Item key={i} {...item} />
    });

     */


    /*
    Using ES6 closure syntax

    return bacon.items.map( (item, idx) => <Item key={idx} {...item} /> );
     */

    return this.getFilteredResults().map( (item, idx) => <Item key={idx} {...item} /> )
  }
}