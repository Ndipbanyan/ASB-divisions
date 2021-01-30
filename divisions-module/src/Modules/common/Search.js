import React from 'react'
import { SearchWrap, Input } from './Atoms.style'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Search() {
    return (
      <SearchWrap>
        <AiOutlineSearch />
        <Input />
      </SearchWrap>
    );
}
