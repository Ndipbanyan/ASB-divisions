import React from 'react'
import { Container, Input } from './Atoms.style'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Search() {
    return (
      <Container
        width="7rem"
        height="1rem"
        font=".5rem"
        align="center"
        pad=".5rem"
        border="1px solid #dce1e7"
      >
        <AiOutlineSearch />
        <Input />
      </Container>
    );
}
