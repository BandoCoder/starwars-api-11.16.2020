import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import StarWarsContext from "./StarWarsContext";
import "./App.css";

class App extends React.Component {
  state = {
    results: [],
    error: null,
    setLoading: (loading) => this.setState({ loading }),
    setResults: (results) => {
      this.setState({
        results,
      });
    },
    setError: (error) => this.setState(error),
  };

  render() {
    return (
      <StarWarsContext.Provider value={this.state}>
        <div className="App">
          <Header />
          <SearchBar />
          <Results />
        </div>
      </StarWarsContext.Provider>
    );
  }
}
export default App;
