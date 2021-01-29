import styled from "styled-components"

export const MainContainer = styled.div`
width:100vw;
height:100vh;
background:tomato;
/* padding:0 1rem 4rem 1rem; */
/* align-items:center;
jus */
`;
export const Container = styled.div.attrs((props) => ({
  width: props.width || "90%",
  height: props.height || "90%",
  background: props.background || "#ffffff",
  // border: props.border || "none",
  display: props.display || "flex",
  direction:props.direction,
  justify: props.justify || "space-between",
  align: props.align,
  radius: props.radius || "4px",
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
  border: ${(props) => props.border};
`
export const Wrapper = styled.div`
  background: red;
  width: 100%;
  height: 95%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 18% 1fr 1fr;
  column-gap: 20px;
  row-gap: 15px;
`;
export const Board = styled.div`
  background: blue;
  grid-row: 2 / span 3;
  grid-column: 2 / span5;
  display: grid;
`;
 export const Nav = styled.div`
   background: #fffffd;
   width: 100%;
   height: 5%;
   display: flex;
   align-items: center;
   justify-content:space-between;
   border-bottom: 1px solid #dce1e7;
   
 `;
export const NavLeft = styled.div`
  width:20%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
 `;
export const NavRight = styled(NavLeft)`
  width: 80%;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || ".8em",
  width:props.size ||"6rem"
}))`
  background: #ffffff;
  outline:none;
  border:none;
  width:${props => props.width};
  height:${props => props.size}
  
`;

export const Listing = styled.ul`
list-style-type:none;
display:flex;

`;
export const List = styled.li`

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
  grid-row: 1;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
  padding: 2rem 1rem 0 1rem;
`;
export const SideCard = styled.div.attrs((props) => ({
  row: props.row || "2",
  column:props.column ||"1"
  
}))`
grid-row:${props=>props.row};
grid-column:${props=>props.column};
padding:.6rem;
background:white;
font-size:1rem;
`