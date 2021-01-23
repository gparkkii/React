import React, { Component } from 'react';
import Subject from "./components/Subject";
import Menu from "./components/Menu";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome', 
      selected_content_id: 0,
      subject:{title:'React 이용해서 APP 만들기!!', sub:'생활코딩으로 리액트 공부하기'},
      welcome: {title: 'welcome', desc: 'Hello, React!!'},
      contents:[
        {id: 1, title: 'React', desc: 'React is a JavaScript library created by Facebook'},
        {id: 2, title: 'Component', desc: 'Components are the building blocks. \n 리액트 컴포넌트에는 하나의 최상위 태그만 쓸 수 있다. \n 컴포넌트의 장점 : 컴포넌트 이름에만 집중하게 하면서 복잡도를 줄여주게된다.'},
        {id: 3, title: 'Event', desc: 'React can perform actions based on user events. For example, the same events as HTML: click, change, mouseover etc.'}
      ]
    }
  }

  getReadContent(){
    let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i++;
      }
  }

  getContent(){
    let _title, _desc, _article, _content = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
      this.selected_content_id = 0;
    } else if(this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = <ReadContent title = {_content.title} desc = {_content.desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id += 1;
        _content = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        )
        this.setState({
          contents: _content,
          mode: 'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update') {
        _content = this.getReadContent();
        _article = <UpdateContent data={_content} onSubmit={
          function(_id, _title, _desc){
            const _newContent = Array.from(this.state.contents);
            let i = 0;
            while(i < _newContent.length){
              if(_newContent[i].id === _id) {
                _newContent[i] = {id: _id, title: _title, desc: _desc};
                break;
              }
              i++;
            }
            this.setState({
              contents: _newContent,
              mode: 'read',
              selected_content_id: this.max_content_id
            });
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
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
        <Menu
          onChangePage = {function(id){
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data = {this.state.contents}  
        ></Menu>
        <Control onChangeMode = {function(_mode){
          if(_mode === 'delete'){
            const _contents = Array.from(this.state.contents);
            console.log('_contents',_contents);
            if(window.confirm('Really?')){
              let i = 0;
              // console.log('(_contents.length',_contents.length);
              // console.log('(_contents[i].id',_contents[i].id);
              // console.log('(this.state.selected_content_id',this.state.selected_content_id);
              if(_contents.length === 0) {
                alert('No contents');
              } else {
                while(i < _contents.length){
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i,1);
                    break;
                  }
                  i++;
                }
              }
            }
            this.setState({
              mode: 'welcome',
              contents: _contents
            })
            alert('deleted');
          } else {
            this.setState({
              mode: _mode
            })
          }
        }.bind(this
        )}></Control>
        {this.getContent()}
      </div>
    );
  }
}
export default App;





