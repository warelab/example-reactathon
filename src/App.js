import React from "react";
import {Row, Jumbotron} from "react-bootstrap";

import bacon from "../data/bacon.json";

import Item from "./Item";

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Jumbotron>
            <h1>Hello World!</h1>
            <p>This is a subtitle.</p>
          </Jumbotron>
          <Row>
            {this.renderItems()}
          </Row>
        </div>
    );
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

    return bacon.items.map( (item, idx) => <Item key={idx} {...item} /> )
  }
}