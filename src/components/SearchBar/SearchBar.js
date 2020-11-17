import React from "react";
import StarWarsContext from "../../StarWarsContext";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  static contextType = StarWarsContext;
  submitSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    const selection = e.target.selection.value;
    this.context.setLoading(true);
    fetch(
      `https://swapi-thinkful.herokuapp.com/api/${selection}/?search=${query}`
    )
      .then((res) => {
        if (!res.ok) {
          this.context.setLoading(false);
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((resJson) => {
        this.context.setLoading(false);
        this.context.setResults(resJson.results);
      })
      .catch((error) => {
        this.context.setError({ error });
      });
  };

  render() {
    return (
      <section className="searchBar">
        <form id="dropDown" onSubmit={this.submitSearch}>
          <label htmlFor="query" className="label">
            Search:{" "}
          </label>
          <input type="text" name="query" className="query" required></input>
          <select
            className="dropMenu"
            form="dropDown"
            name="selection"
            onChange={this.change}
          >
            <option value="people">Characters</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
          <button type="Submit">Search</button>
        </form>
      </section>
    );
  }
}
