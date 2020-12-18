import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css';
import ReviewPage from './components/ReviewPage/ReviewPage.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReviewPage/>
    </div>
  );
}

export default App;
