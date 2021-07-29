import styled from 'styled-components'

function Score({score}){
  return(
    <Container>
      <h3>score</h3>
      <p>{score}</p>
    </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:white;
  border-radius:5px;
  height:100%;
  width:100px;
  h3{
    color:hsl(229, 64%, 46%);
    text-transform:uppercase;
    text-align:center;
    font-size:10px;
  }
  p{
    color: hsl(229, 25%, 31%);
    text-align:center;
    font-size:29px;
    font-weight:bold;
  }
`
export default Score
