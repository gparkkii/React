import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.h2`
  margin-top: 24px;
  font-size: 20px;
  font-weight: 400;
  color: navy;
`

function Header() {
  return (
    <Link to='/'>
      <Logo>Home</Logo>
    </Link>
  )
}

export default Header;
