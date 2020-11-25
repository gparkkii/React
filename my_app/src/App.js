import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
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

class Menu extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">React</a></li>
          <li><a href="2.html">Component</a></li>
          <li><a href="3.html">Event</a></li>
        </ul>
      </nav>
    );
  }
}

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
