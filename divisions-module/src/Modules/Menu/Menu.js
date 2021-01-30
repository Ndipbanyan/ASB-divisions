import React from 'react'
import { useMediaQuery } from "react-responsive";
import { Listing, Logo, Span } from '../common/Atoms.style'
import {MdViewCarousel} from 'react-icons/md'
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArchive } from "react-icons/io";


export default function Menu() {
    const list = [
      { title: "Home", src: <IoHomeSharp/> },
      { title: "Entries", src: <IoIosArchive/> },
      { title: "Division", src: <MdViewCarousel/> },
    ];
    
    return (
      <>
        <Logo>
          <img src="/images/logo.png" alt="logo" />
          <Span>FE Engineer Test 1</Span>
        </Logo>
        
          <Listing>
            {list.map((item) => {
              const { title, src } = item;
              return (
                <li key={title}>
                  <span style={{ margin:".4rem", }}>{src}</span>
                  {title}
                </li>
              );
            })}
          </Listing>
        
      </>
    );
}
