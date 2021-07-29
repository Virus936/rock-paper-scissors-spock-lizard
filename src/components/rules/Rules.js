import styled from 'styled-components'
import ImageRules from '../../images/image-rules.svg'
import ImageRulesLevel5 from '../../images/image-rules-bonus.svg'


function Rules({level, trigger, toggle}){
  console.log(level)
  return (trigger) ?(

    <Container>
      <div className='rules'>
        <button onClick={toggle}>X</button>
        <h1>rules</h1>
        <img src={level===3?ImageRules:ImageRulesLevel5} alt="" />
      </div>
    </Container>
  ):''
}


const Container = styled.div`
  position:fixed;
  z-index:999;
  display:flex;
  justify-content:center;
  align-items:center;
  top:0;
  left:0;
  height:100vh;
  width:100vw;
  background-color:rgba(205,205,255,0.3);

  .rules{
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width:100%;
    background:white;
    height:100%;

    @media(min-width:700px){
      width:400px;
      height:500px;
    }
  }
  button{
    position:absolute;
    background:transparent;
    border:none;
    cursor:pointer;
    bottom:2em;
    right:50%;
    transform:translateX(50%);
    font-size:20px;
    color:grey;

    @media(min-width:700px){
      bottom:inherit;
      top:1em;
      right:1em;
    }
  }
  h1{
  text-transform:uppercase;
  }
  img{
    width:calc(100% - 2em);
  }
`
export default Rules
