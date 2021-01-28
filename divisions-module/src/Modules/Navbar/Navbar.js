import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {Container,Nav} from '../common/Atoms.style'
import Right from '../Navbar/Right'
import Left from './Left'
export default function Navbar() {
    return (
      <Nav>
        <Container height="100%" width="90%" margin="auto" border="none" radius="none">
          <Left />
          <Right />
        </Container>
      </Nav>
    );
}
