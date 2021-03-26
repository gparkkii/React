import React from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import LandingPage from './pages/LandingPage';
import NumberBaseball from './pages/NumberBaseball';
import Header from './components/common/Header';
import Omok from './pages/Omok';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80vh;
`

function App() {
  return (
    <>
      <Header/>
      <BodyContainer>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/numberbaseball' component={NumberBaseball}/>
          <Route exact path='/omok' component={Omok}/>
        </Switch>
      </BodyContainer>
    </>
  );
}

export default App;
