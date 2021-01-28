import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {Container} from '../common/Atoms.style'
import Search from '../common/Search'
export default function Header() {
    return (
        <Container>
           <Search/> 
        </Container>
    )
}
