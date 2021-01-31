import React from 'react'
import { Container, Wrapper,Board, DivisionText, } from '../common/Atoms.style'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Metrics from '../Metric/Metric'
import Navbar from '../Navbar/index'
import Summary from '../Summary/index'
import History from '../History/index'
export default function Division() {
    return (
      <Container
        // background="green"
        margin="auto"
        border="none"
        radius="none"
        font=".5rem"
        direction="column"
      >
        <DivisionText>   
          Division <span style={{color:'#000'}}><IoChevronForwardSharp /></span>
          Module
        </DivisionText>
        <Wrapper>
          <Metrics />
          <Summary />
          <History />
          <Board />
        </Wrapper>
      </Container>
    );
}
