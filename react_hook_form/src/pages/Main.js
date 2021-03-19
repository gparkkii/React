import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function Main() {
  return (
    <Container>
      <h2>MainPage</h2>
      <button>
        <Link to='/register'>회원가입</Link>
      </button>
    </Container>
  )
}

export default withRouter(Main);
