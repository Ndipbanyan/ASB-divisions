import React from 'react'
import {MainContainer,} from './Modules/common/Atoms.style'
import Division from './Modules/Division/Division'
import Navbar from './Modules/Navbar/index'
function App() {
  return (
    <MainContainer >
     
      <Navbar/>
      <Division />
    </MainContainer>
  );
}

export default App;
