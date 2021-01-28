import React from 'react'
import { useMediaQuery } from "react-responsive";
import {Listing,List } from '../common/Atoms.style'
import { Container,Button } from '../common/Atoms.style'
import {GiHamburgerMenu} from 'react-icons/gi'
export default function Menu() {
    const list = [
      { title: "Home", src: "/images/home.png" },
      { title: "Entries", src: "/images/entries.png" },
      { title: "division", src: "/images/division.png" },
    ];
    const isDesktopOrLaptop = useMediaQuery({
      query: "(min-device-width: 1224px)",
    });
    const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
    const isTabletOrMobileDevice = useMediaQuery({
      query: "(max-device-width: 1224px)",
    });
    return (
      <Container >
        {isTabletOrMobile && (
          <Listing>
            {list.map((item) => {
              const { title, src } = item;
              return (
                <List key={title}>
                  <img src={src} alt={title} />
                  {title}
                </List>
              );
            })}
          </Listing>
        )}
        {isTabletOrMobileDevice && (
          <Button>
            <GiHamburgerMenu />
          </Button>
        )}
      </Container>
    );
}
