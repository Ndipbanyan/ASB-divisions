import React from 'react'
import { useMediaQuery } from "react-responsive";
import {Listing,Logo,Span } from '../common/Atoms.style'


export default function Menu() {
    const list = [
      { title: "Home", src: "/images/home.png" },
      { title: "Entries", src: "/images/entries.png" },
      { title: "Division", src: "/images/division.png" },
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
                  <img
                    src={src}
                    alt={title}
                    style={{ marginRight: ".5rem", marginLeft: ".5rem" }}
                  />
                  {title}
                </li>
              );
            })}
          </Listing>
        
      </>
    );
}
