import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css';
import ReviewPage from './components/ReviewPage/ReviewPage.jsx';
import FavoritePage from './components/FavoritePage/FavoritePage.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReviewPage/>
      <FavoritePage/>
    </div>
  );
}

export default App;
