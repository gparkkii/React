import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href = '/' onClick = {function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          <h2>
            <a href="https://www.youtube.com/watch?v=XMb0w3KMw00&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&index=1">
            생활코딩 유튜브
            </a>
          </h2>
          <h2>{this.props.sub}</h2>
        </header>
      );
    }
}

export default Subject;
