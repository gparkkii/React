import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import mainpage from './pages/landingpage';
import numberBaseball from './pages/detailpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={mainpage} />
        <Route path="/numberbaseball" component={numberBaseball} />
      </Switch>
    </Router>
  );
}

export default App;
