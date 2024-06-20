
import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"

const StyledDiv = styled.div`
  padding: 40px;
`

function App() {


  return (
    <>
    <GlobalStyles />
    <StyledDiv>
    <Heading as='h1'>I am a styled component</Heading>
    <Heading as='h2'>Check in & Check out</Heading>
    <Button variation="primary" size="medium">I am a button</Button>
    <Button variation="secondary" size="small">I am another button</Button>
    <Heading as='h3'>Form</Heading>
    <Input />
    </StyledDiv>
    </>
  )
}

export default App
