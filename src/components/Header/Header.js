import React from "react";
import "./Header.css";
export default class Header extends React.Component {
  render() {
    return (
      <main>
        <div className="linkBox">
          <header className="header">
            <h1>Mass Wars</h1>
            <p>
              Find the mass of anything that could contain mass in the starwars
              universe
            </p>
          </header>
        </div>
      </main>
    );
  }
}
