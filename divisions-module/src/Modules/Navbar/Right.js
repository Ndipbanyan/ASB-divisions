import React from 'react'
import { useMediaQuery } from "react-responsive";
import { Link } from '@reach/router'
import { IoIosNotifications } from 'react-icons/io'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavRight, Button } from '../common/Atoms.style'

import Search from '../common/Search'
export default function Right() {
    const isTabletOrMobileDevice = useMediaQuery({
      query: "(max-device-width: 1224px)",
    });
    return (
      <NavRight>
        <Search />
        <Link to="/notifications">
          <IoIosNotifications />
        </Link>
        {isTabletOrMobileDevice && (
          <Button>
            <GiHamburgerMenu />
          </Button>
        )}
      </NavRight>
    );
}
