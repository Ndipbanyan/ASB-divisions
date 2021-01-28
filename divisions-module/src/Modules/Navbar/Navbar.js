import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {Container} from '../common/Atoms.style'
import Right from '../Navbar/Right'
import Left from './Left'
export default function Navbar() {
    return (
        <Container background="yellow" align="center" >
            <Left/>
           <Right/> 
        </Container>
    )
}
