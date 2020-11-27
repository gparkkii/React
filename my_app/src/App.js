import React, { Component } from 'react';
import Subject from "./components/Subject";
import Menu from "./components/Menu";
import Content from "./components/Content";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="React 이용해서 APP 만들기!!" sub="생활코딩으로 리액트 공부하기"></Subject>
        <Menu></Menu>
        <Content title="Component" article1="리액트 컴포넌트에는 하나의 최상위 태그만 쓸 수 있다!! 별표 다섯개!!" article2="컴포넌트의 장점 : 컴포넌트 이름에만 집중하게 하면서 복잡도를 줄여주게된다."></Content>
      </div>
    );
  }
}

export default App;
