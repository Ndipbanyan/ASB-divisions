import React from 'react'
import { Link } from '@reach/router'
import {IoIosNotifications} from 'react-icons/io'
import { NavRight } from '../common/Atoms.style'
import Search from '../common/Search'
export default function Right() {
    return (
        <NavRight>
            <Search />
            <Link to="#">
                <IoIosNotifications/>
            </Link>
        </NavRight>
    )
}
