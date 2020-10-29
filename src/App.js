import React, { Component } from "react";
import "./App.css";
import DisplayQuotes from "./Components/DisplayQuotes";

const sampleQuotes = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuotes,
    };

    this.getQuotes = this.getQuotes.bind(this);
  }
  getQuotes() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quotes: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.getQuotes}>
          Get new quotes
        </button>
        <DisplayQuotes quote={this.state.quotes} />
      </div>
    );
  }
}

export default App;
