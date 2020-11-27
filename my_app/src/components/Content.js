import React, { Component } from 'react';

class Content extends Component {
    render(){
      return(
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.article1}</p>
          <p>{this.props.article2}</p>
        </article>
      );
    }
}

export default Content;