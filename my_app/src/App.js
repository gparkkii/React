import React, { Component } from 'react';
import Subject from "./components/Subject";
import Menu from "./components/Menu";
import Content from "./components/Content";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read', 
      selected_content_id: 2,
      subject:{title:'React 이용해서 APP 만들기!!', sub:'생활코딩으로 리액트 공부하기'},
      welcome: {title: 'welcome', desc: 'Hello, React!!'},
      contents:[
        {id: 1, title: 'React', desc: 'React is a JavaScript library created by Facebook'},
        {id: 2, title: 'Component', desc: 'Components are the building blocks. \n 리액트 컴포넌트에는 하나의 최상위 태그만 쓸 수 있다. \n 컴포넌트의 장점 : 컴포넌트 이름에만 집중하게 하면서 복잡도를 줄여주게된다.'},
        {id: 3, title: 'Event', desc: 'React can perform actions based on user events. For example, the same events as HTML: click, change, mouseover etc.'}
      ]
    }
  }
  render() {
    let _title,_desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.title;
    } else if(this.state.mode === 'read') {
      let i = 0;
      while(i < this.state.contents.length) {
        const data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }
    return (
      <div className="App">
        <Subject 
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode : 'welcome'});
          }.bind(this)}
        >
        </Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:'welcome'
            });
            // this.state.mode = 'welcome';
            // event가 호출될때 실행되는 이 함수 안에서는 this의 값이 component 자신을 가르키지않고 아무값도 세팅되어있지 않기 때문에 this를 읽을 수 없다.
            // 따라서 onClick 함수의 뒤에 .bind(this)를 달아준다.
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Menu
          onChangePage = {function(id){
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data = {this.state.contents}  
        ></Menu>
        <Content title = {_title} desc = {_desc}></Content>
      </div>
    );
  }
}
export default App;





