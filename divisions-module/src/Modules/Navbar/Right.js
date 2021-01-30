import React from 'react'
import { useMediaQuery } from "react-responsive";
import { Link } from '@reach/router'
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle,  } from "react-icons/fa";
import { NavRight, Menu,UserButton,UserButton1} from '../common/Atoms.style'

import Search from '../common/Search'
export default function Right() {
      const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          textDecoration: "none",
          color: isCurrent ? "#00000ff" : "#72809D",
        },
      };
    }}
  />
);
   
    return (
      <NavRight>
        <Search />
        <NavLink to="/notifications" style={{textDecoration:"none"}}>
          <IoIosNotifications />
        </NavLink>
        <div
          style={{ display:"flex",color: "#d9d9d9", alignItems: "center", }}
        >
          <UserButton>
            <FaUserCircle />
          </UserButton>
          <UserButton1>
            <IoIosArrowDown />
          </UserButton1>
        </div>

        <Menu>
          <GiHamburgerMenu />
        </Menu>
      </NavRight>
    );
}
