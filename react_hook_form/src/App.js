import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Detail from './pages/Detail';
import Main from './pages//Main'
import Register from './pages//Register'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/register" component={Register}/>
          <Route path="/detail" component={Detail}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
