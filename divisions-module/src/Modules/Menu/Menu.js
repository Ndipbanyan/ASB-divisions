import React from 'react'
import {Listing,List } from '../common/Atoms.style'
import {Container} from '../common/Atoms.style'

export default function Menu() {
    const list = [
        { title: "Home", src:"/images/home.png"},
        {title:"Entries", src:"/images/entries.png"},
        {title:"division", src:"/images/division.png"}
    ]
    return (
        <Container>
            <Listing>
                {list.map((item) => {
                    const {title, src}=item
                    return (
                        <List>
                            <img src={src}  />
                            {title}
                        </List>
                        )
                })}
            </Listing>
       </Container>
    )
}
