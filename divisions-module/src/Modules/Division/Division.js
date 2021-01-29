import React from 'react'
import { Container, Wrapper,Board, } from '../common/Atoms.style'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Metrics from '../Metric/Metric'
import Navbar from '../Navbar/index'
import Summary from '../Summary/index'
export default function Division() {
    return (
      <Container
        background="green"
        margin="auto"
        border="none"
        radius="none"
        font=".5rem"
        direction="column"
      >
        <div
          style={{
            alignItems: "center",
            margin: ".5rem 0 .5rem 0",
            // textAlign: "center",
          }}
        >
          Division <IoChevronForwardSharp />
          Module
        </div>
        <Wrapper>
          <Metrics />
          <Summary/>
          <Board/>
        </Wrapper>
      </Container>
    );
}
