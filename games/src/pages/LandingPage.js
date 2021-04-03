import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`

function LandingPage() {
  return (
    <div>
      <h2>Welcome to Game Center</h2>
      <FlexBox>
        <Link to={'/minesweeper'}>
          <button>MineSweeper</button>
        </Link>
        <Link to={'/omok'}>
          <button>Omok</button>
        </Link>
        <Link to={'/numberbaseball'}>
          <button>NumberBaseball</button>
        </Link>
      </FlexBox>
    </div>
  )
}

export default LandingPage
