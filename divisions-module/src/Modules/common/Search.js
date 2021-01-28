import React from 'react'
import { Container, Input } from './Atoms.style'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Search() {
    return (
        <Container background
        ="yellow" width="7rem" height="1rem" font=".5rem">
            <AiOutlineSearch/>
            <Input/>
        </Container>
    )
}
