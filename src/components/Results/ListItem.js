import React from "react";
import "./ListItem.css";
import StarWarsContext from "../../StarWarsContext";

export default class ListItem extends React.Component {
  static contextType = StarWarsContext;
  render() {
    const items = this.context.results;
    return (
      <div>
        {items.map((item) => (
          <li key={item.name} className="listItem">
            {item.name} - {item.mass} Kilos
          </li>
        ))}
      </div>
    );
  }
}

/*  <ul>
              {Object.keys(item).map((key, i) => (
                <li key={i}>{`${key} : ${item[key]}`}</li>
              ))}
            </ul> */
