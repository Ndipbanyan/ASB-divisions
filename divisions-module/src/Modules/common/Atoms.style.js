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
  /* background: red; */
  display: flex;
  width: 100%;
  height: 95%;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: 18% 1fr 1fr;
    column-gap: 20px; 
    row-gap: 15px;
  }
`;
export const Board = styled.div`
  /* background: blue; */
  grid-row: 2 / span 3;
  grid-column: 2 / span5;
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

   }
 `;
export const NavLeft = styled.div`
  background:green;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 600px) {
    width: 35%;
  }
  `;
  export const Logo = styled.div`
    display:flex;
    align-items:center;
    width: 50%;
  `;
  export const Span = styled.span`
    @media only screen and (max-width: 600px) {
      display:none;
    }
  `;
  export const Listing = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-around;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  `;
 
export const NavRight = styled(NavLeft)`
  background: yellow;
  width: 80%;
  @media only screen and (min-width: 600px) {
    width: 40%;
    font-size:1.5rem;
  }
  `
  export const SearchWrap = styled.div`
  width:8rem;
  height:.8rem;
  font-size:.6rem;
  align-items:center;
  padding:.5rem;
  background:#ffffff;
  border:1px solid #dce1e7;
  @media only screen and (min-width: 600px) {
   
  }
`;



export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || ".9em",
  width:props.size ||"7rem"
}))`
  background: #ffffdd;
  outline:none;
  border:none;
  width:${props => props.width};
  height:${props => props.size};

  
`;



export const Button = styled.button`
display:flex;
align-items:center;
justify-content:flex-start;
width:2rem;
height:2rem;
background:none;
border:none;
font-size:1rem;
cursor: pointer;
`
export const Card = styled.div`
  background: #ffffff;
  grid-row: 1;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
  padding: 2rem 1rem 0 1rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const SideCard = styled.div.attrs((props) => ({
  row: props.row || "2",
  column: props.column || "1",
  box: props.box || "0px 4px 30px rgba(192, 192, 192, 0.25",
  background: props.background || "#ffffff",
}))`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
  /* box-shadow:${(props) => props.box}; */
  /* padding: 0.4rem; */
  background: ${(props) => props.background};
  /* border: 1px solid; */
  /* font-size: 1rem; */
  @media only screen and (max-width: 768px) {

  }
`;