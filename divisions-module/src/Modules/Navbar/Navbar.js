import React from 'react'
import {Container,Nav} from '../common/Atoms.style'
import Right from '../Navbar/Right'
import Left from './Left'
export default function Navbar() {
    return (
      <Nav>
        <Container height="100%" width="90%" margin="auto" border="none" radius="none" align="center">
          <Left />
          <Right />
        </Container>
      </Nav>
    );
}
