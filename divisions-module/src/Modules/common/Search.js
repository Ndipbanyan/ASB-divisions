import React from 'react'
import { Container, Input } from './Atoms.style'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Search() {
    return (
      <Container
        width="11rem"
        height="1.5rem"
        font=".6rem"
        align="center"
        pad=".5rem"
        border="1px solid #dce1e7"
      >
        <AiOutlineSearch />
        <Input />
      </Container>
    );
}
