import React, { Component } from "react";
import Counter from "./containers/Counter";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
