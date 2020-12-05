const React = require("react"),
      ReactDOM = require("react-dom");

const WordRelayClass = require("./wordRelayClass"),
      WordRelayHooks = require("./wordRelayHooks");

ReactDOM.render(<WordRelayClass />, document.querySelector("#class"));
ReactDOM.render(<WordRelayHooks />, document.querySelector("#hooks"));