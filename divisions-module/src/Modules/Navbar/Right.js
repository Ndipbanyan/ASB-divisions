import React from 'react'
import { Link } from '@reach/router'
import {IoIosNotifications} from 'react-icons/io'
import { Container } from '../common/Atoms.style'
import Search from '../common/Search'
export default function Right() {
    return (
        <Container background ="pink" align="center" width="50%" height="100%" radius="none">
            <Search />
            <Link to="#">
                <IoIosNotifications/>
            </Link>
        </Container>
    )
}
