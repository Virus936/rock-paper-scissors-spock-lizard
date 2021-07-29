import styled from 'styled-components'

function RulesButton({trigger}){
  return(
    <Container onClick={trigger}>
      rules
    </Container>
    )
}

const Container = styled.button`
  display:block;
  position:absolute;
  cursor:pointer;
  background-color:transparent;
  color:white;
  border: solid 2px hsl(217, 16%, 45%);
  border-radius:5px;
  text-transform:uppercase;
  padding:1em;
  width:90px;
  bottom:2em;
  left:50%;
  transform:translateX(-50%);
`
export default RulesButton
