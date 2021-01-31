import styled from "styled-components"


export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #edf6ff;
`;
export const Container = styled.div.attrs((props) => ({
  width: props.width || "90%",
  height: props.height || "95%",
  background: props.background || "#ffffff",
  display: props.display || "flex",
  direction: props.direction,
  justify: props.justify || "space-between",
  align: props.align,
 
  margin: props.margin,
  pad: props.pad,
  border: props.border,
  font: props.font,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  font-size: ${(props) => props.font};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  border-radius: ${(props) => props.radius};
  margin: ${(props) => props.margin};
  padding-left: ${(props) => props.pad};
  padding-right: ${(props) => props.pad};
  
    @media only screen and (min-width: 768px) {
      width:98%;
      height:95%;
    
    }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 95%;
  flex-wrap: wrap;
  justify-content:center;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: 18% 1fr 1fr;
    column-gap: 20px; 
    row-gap: 15px;
  }
`;
export const DivisionText = styled.div`
  align-items: center;
  margin: 0.5rem 0 0.5rem 0;
  font-size: 1rem;
  color: #778699;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const Board = styled.div`
  /* background: blue; */
  grid-row: 2 / span 3;
  grid-column: 2 / span 5;
  display: grid;
`;
 export const Nav = styled.div`
   background: #ffffff;
   width: 100%;
   height: 5%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #dce1e7;
   font-size: 1rem;
   @media only screen and (min-width: 768px) {
     font-size: .8rem;
   }
 `;
export const NavLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 10%;
  }
  @media only screen and (min-width: 768px) {
    width: 45%;
  }
`;
  export const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media only screen and (max-width: 768px) {
      width: 10%;
    }
  `;
export const Span = styled.span`
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
  export const Listing = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-around;
    color: #778699;

    @media only screen and (max-width: 600px) {
      display: none;
    }
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  `;
 
export const NavRight = styled(NavLeft)`
  width: 70%;

  @media only screen and (max-width: 600px) {
    width: 80%;
    font-size: 1.5rem;
  }
  
`;
  export const SearchWrap = styled.div`
    width: 8rem;
    height: 1.5rem;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #dce1e7;
    border-radius: 4px;
    @media only screen and (min-width: 600px) {
      font-size: 1rem;
      width: 12rem;
      height: 2rem;
    }
    @media only screen and (max-width: 768px) {
      width: 10rem;
      height:1.5rem
    }
  `;
export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  outline: none;
  border: none;
  width: 7rem;
  height:.9rem;
  @media only screen and (min-width: 600px) {
    font-size: .8rem;
    width: 10rem;
    height:1rem;
  }
`;
export const UserButton = styled.div`
  display: flex;
  font-size: 2rem;
  text-align: center;
  outline: none;
  background: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const UserButton1 = styled(UserButton)`
  font-size: 1rem;
  color: #72809d;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Menu = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const Card = styled.div`
  background: #ffffff;
  grid-row: 1;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
  padding:1rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem .7rem 0 .7rem;
    
  }
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: .4rem .2rem;
    margin:.5rem;
    width:8rem;
    height:5rem;
  }

`;
export const SideCard = styled.div.attrs((props) => ({
  row: props.row || "2",
  column: props.column || "1",
  box: props.box || "0px 4px 30px rgba(192, 192, 192, 0.25)",
  background: props.background || "#ffffff",
}))`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  box-shadow: ${(props) => props.box};
  border-radius: 6px;
  background: ${(props) => props.background};
  @media only screen and (max-width: 768px) {
  }
`;