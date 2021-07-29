import React  from "react"
import styled from 'styled-components'
import Triangle from '../../images/bg-triangle.svg'
import Pentagon from '../../images/bg-pentagon.svg'
import Choice from './Choice'


function Game({level, setPlaying, playing, setPlayerChoice }){

  const handleClick = e => {
    setPlaying(!playing)
    setPlayerChoice(e.target.dataset.game)
    
  }
  return(
    <Container>
      <div className={`link ${ level===3?'link3':'link5' }`}>

        <img className='edges' src={level===3 ? Triangle:Pentagon } alt="" />
        <Choice handleClick={handleClick} level={level} />

      </div>

    </Container>
    )
}

const Container = styled.div`
  display:flex;
  position:absolute;
  top:0;
  right:0;
  width:100vw;
  height:100vh;
  justify-content:center;
  align-items:center;

  .Choice{
    display:flex;
    position:absolute;
    justify-content:center;
    align-items:center;
    background-color:white;
    border-radius:50%;
    cursor:pointer;
  }

  .link{
    position:relative;
    width:10rem;
    height:10rem;

  }
  .link3{

    .Choice:nth-of-type(1){
      top:0;
      left:0;
      transform:translate(-50%,-50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice:nth-of-type(2){
      top:0;
      right:0;
      transform:translate(50%,-50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice:nth-of-type(3){
      bottom:0;
      right:50%;
      transform:translate(50%,50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice{
      height:7rem;
      width:7rem;
    }
  }

  .link5{
    .Choice:nth-of-type(1){
      top:0;
      left:50%;
      transform:translate(-50%,-50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice:nth-of-type(2){
      top:35%;
      right:0;
      transform:translate(50%,-50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice:nth-of-type(3){
      bottom:0;
      right:20%;
      transform:translate(50%,50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice:nth-of-type(4){
      bottom:0;
      left:20%;
      transform:translate(-50%,50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice:nth-of-type(5){
      top:35%;
      left:0;
      transform:translate(-50%,-50%);
      border: hsl(40, 84%, 53%) solid 10px;
      box-shadow:2px 5px 0 0 hsl(39, 89%, 49%),inset 2px 5px 0 0 rgba(0,0,0,0.1);
    }
    .Choice{
      height:80px;
      width:80px;
    }
  }

  .edges{
    display:block;
    width:100%;
  }

`
export default Game
