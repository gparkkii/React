import React, { Component } from 'react';

class Menu extends Component {
    shouldComponentUpdate(newProps, newState) {
      console.log('Rendering ComponentUpdate');
      // newProps 는 menu의 props가 바뀌었을 때 새롭게 바뀐 값이 적용된다.
      // newState 는 menu의 state가 바뀌었을 때 새롭게 바뀐 값이 적용된다.
      if(this.props.data === newProps.data) {
        return false;
      }
      return true;
    }
    render(){
      console.log('Rendering Menu');
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




