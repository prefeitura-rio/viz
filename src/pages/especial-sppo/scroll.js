import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScrollSPPO from "./scroll-sppo/scrollmagic";

class App extends Component {
  render() {
    return <ScrollSPPO />;
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("scroll-div")
);
