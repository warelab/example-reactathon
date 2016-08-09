import React from "react";
import {Row, Jumbotron} from "react-bootstrap";
import _ from "lodash";

import {client as searchClient} from 'gramene-search-client';

import Suggestion from "./Suggestion";
import Filter from "./Filter";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: 'PAD',
      suggestions: []
    };

    this.updateSuggestions();
  }

  updateFilterText(filterText) {
    // this is ES6 shorthand for
    // this.setState({ filterText: filterText });
    this.setState({ filterText });

    this.updateSuggestions(filterText);
  }

  updateSuggestions(filterText = this.state.filterText) {
    searchClient.suggest(filterText).then(
        (suggestionResponse) => {
          if (suggestionResponse.metadata.query === this.state.filterText) {
            const categories = _.get(suggestionResponse, 'categories');
            if(!categories) return [];

            const suggestions = _(categories).map( (cat) => _.head(cat.suggestions) )
                                .sortBy('score')
                                .reverse()
                                .value() || [];

            this.setState({suggestions});
          }
        }
    );
  }

  render() {
    return (
        <div>
          <Jumbotron>
            <h1>Suggestotron</h1>
            <p>Let me tell you what you want</p>
          </Jumbotron>
          <Filter filterText={this.state.filterText}
                  onFilterChange={(e) => this.updateFilterText(e.target.value)} />
          <Row>
            {this.renderSuggestions()}
          </Row>
        </div>
    );
  }

  getSuggestions() {
    return this.state.suggestions;
  }

  filteredResultCount() {
    return this.getSuggestions().length;
  }

  renderSuggestions() {
     return this.getSuggestions().map( (item, idx) => <Suggestion key={idx} {...item} /> )
  }
}