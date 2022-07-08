import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScrollExample from "../../components/scroll_example/scroll_example";

class App extends Component {
  render() {
    return <ScrollExample />;
  }
}

ReactDOM.render(React.createElement(App, {}, null), document.getElementById("scroll-div"));
