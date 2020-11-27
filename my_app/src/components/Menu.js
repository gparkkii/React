import React, { Component } from 'react';

class Menu extends Component {
    render(){
      const data = this.props.data,
            lists = [];
      let i = 0;
      while( i < data.length) {
        lists.push(
        <li key = {data[i].id}>
          <a 
            href = {"/content/" + data[i].id}
            data-id = {data[i].id}
            onClick = {function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            >{data[i].title}</a>
          {/* <a 
            href = {"/content/" + data[i].id}
            onClick = {function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            >{data[i].title}</a> */}
        </li>)
        i++;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }
  export default Menu;




