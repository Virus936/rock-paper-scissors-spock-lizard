import React, {useState} from 'react'
import styled from 'styled-components'
import Header from './components/header/Header'
import Game from './components/game/Game'
import Result from './components/game/Result'
import RulesButton from './components/rules/RulesButton'
import Rules from './components/rules/Rules'

import './App.css'



function App() {
  const [RulesTriggered, setRulesTriggered] = useState(false)
  const [score, setScore] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [level, setLevel] = useState(5)
  const [playerChoice, setPlayerChoice] = useState("")
  const handleClick = () => {
    setRulesTriggered(!RulesTriggered)
  }
  const addPoint = (num) => {
    setScore(score+num)
  }
  const restart = () => {
    console.log('restart')
    setPlaying(true)
  }



  return (
    <Container>
      <Header 
        score = {score} 
        level={level}
        setLevel={setLevel}
      />
      { playing ? (
      <Game
        setPlaying={setPlaying}
        level={level}
        playing={playing}
        setPlayerChoice={setPlayerChoice}
        />
      )
      :
      (
      <Result 
        playerChoice={playerChoice} 
        addPoint={addPoint}
        playing={playing}
        level={level}
        restart={restart}
        />
      )}
      <RulesButton trigger={handleClick}  />
      <Rules trigger={RulesTriggered} level={level} toggle={handleClick}/>
    </Container>
  );
}

const Container = styled.div`
  position:relative;
  background: radial-gradient(circle at top, hsl(214, 47%, 23%) 0%, hsl(237,49%,15%) 80%); 
  height:100vh;
  padding:30px;
  padding-top:30px;
  width:100vw;
`

export default App;
