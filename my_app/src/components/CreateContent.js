import React, { Component } from 'react';

class CreateContent extends Component {
    render(){
      return(
        <article>
          <h2>Create</h2>
          <form action = "/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              // debugger;
              // console.log(e.target.title.value,e.target.desc.value)
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <h2>{this.props.title}</h2>
            <p>
              <input
                type="text"
                name="title"
                placeholder="title"
              />
            </p>
            <p>
              <textarea
                name='desc'
                placeholder="description"
              />
            </p>
            <p>
              <input type="submit"/>
            </p>
          </form>
        </article>
      );
    }
}

export default CreateContent;