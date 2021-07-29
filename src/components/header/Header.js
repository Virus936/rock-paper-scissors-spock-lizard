import React from 'react';
import styled from 'styled-components';
import Score from './Score';
import Game3  from '../../images/logo.svg';
import Game5  from '../../images/logo-bonus.svg';


function Header({score, level, setLevel}) {
  const handleClick = () => {
    setLevel(level===3?5:3)
  }
  return (
    <Container>
      <Img onClick={handleClick} src={level===3?Game3:Game5} alt="" />
      <Score score={score} />
    </Container>
  );
}
const Img = styled.img`
  height:55px
`
const Container = styled.header`
  position:relative;
  display:flex;
  z-index:12;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  height:110px;
  border: solid 2px hsl(217, 16%, 45%);
  border-radius:1em;
  padding:1em;
`;
export default Header;
