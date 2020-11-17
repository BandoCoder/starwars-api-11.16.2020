import React from "react";
import ListItem from "./ListItem";
import "./Results.css";
import StarWarsContext from "../../StarWarsContext";

export default class Results extends React.Component {
  state = {
    loading: false,
  };
  static contextType = StarWarsContext;
  renderResults = (results) => {
    this.setState({
      results,
    });
  };
  render() {
    return (
      <section className="results" role="alert">
        <h2>Results</h2>
        <div className="resultList">
          <div>
            {this.context.error ? (
              <div>
                <h1>
                  Sorry, there was a problem '{this.context.error.detail}'
                </h1>
                <p>Please refresh the page</p>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <ul>{this.context.loading ? <h1>Loading...</h1> : <ListItem />}</ul>
        </div>
      </section>
    );
  }
}
