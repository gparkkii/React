const React = require('react'),
      { Component } = React;

class Webpack extends Component {
    state = {
        text: 'Hello, webpack'
    };
    render() {
        return  <h1>{this.state.text}</h1>;
    }
}

module.exports = Webpack;





