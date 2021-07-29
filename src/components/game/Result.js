import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Rock from '../../images/icon-rock.svg'
import Paper from '../../images/icon-paper.svg'
import Scissors from '../../images/icon-scissors.svg'
import Spock from '../../images/icon-spock.svg'
import Lizard from '../../images/icon-lizard.svg'


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function Result({level,playerChoice, addPoint, playing, restart}){
  const [computerChoice, setComputerChoice] = useState("")
  const [resultEnd, setResultEnd] = useState(false)
  const [youWin, setYouWin] = useState("")

  useEffect( () => {
    const test = async () => {
      await sleep(500)
      const choiceComp = Math.floor(Math.random() * level)
      setComputerChoice(choiceComp)
      let win = (playerChoice - choiceComp)%level
      console.log('win',win)
      if (win<0) {
        win+=level
      }
      const winner = win===0?'draw':win%2===1?'you':'computer'
      setYouWin(winner)
      if (winner === 'you') {
        addPoint(1)
      }else if (winner ==='computer') {
        addPoint(-1)
      }else{

      }
      setResultEnd(true)
    }
    test()
  }, [])


  const choices = [ Rock, Paper, Scissors, Spock, Lizard ]

  return(
    <Container>
      <div>
        <Player active={youWin=='you'}> <img src={choices[playerChoice]} alt="" /> </Player>
        {computerChoice === '' ? '' : <Player active={youWin=='computer'}><img src={choices[computerChoice]} alt="" /></Player>
        }
        {resultEnd && <Button onClick={restart}>New Game</Button>}

      </div>


    </Container>
    )
}

const Player = styled.div`

  box-shadow:${props => { return props.active && '0 0 0 10px rgba(255,255,255,.5),0 0 0 20px rgba(225,225,225,.2) '}}

`

const Button = styled.button`
  position:absolute;
  background-color:transparent;
  bottom:-6em;
  right:50%;
  transform:translateX(50%);
  border:solid white 1px;
  border-radius:.2em;
  padding:.5em 2em;
  color:white;

`
const Container = styled.div`
  display:flex;
  position:absolute;
  top:0;
  right:0;
  width:100vw;
  height:100vh;
  justify-content:center;
  align-items:center;
  &>div{
    display:flex;
    justify-content:space-between;
    position:relative;
    width:16rem;
    height:5rem;
    div{
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:white;
      border-radius:50%;
      border:solid red;
      width:2em;
      height:2em;
      font-size:3em;
      img{
        width:50%;
      }
    }

  }
`
export default Result
