import React from 'react'
import { Container } from '../common/Atoms.style'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Navbar from '../Navbar/index'
export default function Division() {
    return (
      <Container
        background="green"
        margin="auto"
        border="none"
        radius="none"
        font=".5rem"
      >
        <div style={{ alignItems: "center", margin: ".5rem 0 .5rem 0", textAlign: "center"}}>
          Division <IoChevronForwardSharp />
          Module
        </div>
        {/* <Navbar /> */}
      </Container>
    );
}
