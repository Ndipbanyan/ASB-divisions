import styled from "styled-components"

export const MainContainer = styled.div`
width:100vw;
height:100vh;
background:#0000ff;
`;
export const Container = styled.div.attrs((props) => ({
  width: props.width || "100%",
  height: props.height || "5%",
  background: props.background || "#ffffff",
  border: props.border || "none",
  display: props.display || "flex",
  justify: props.justify || "space-between",
  radius:props.radius||"4px",
  font: props.font,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  font-size: ${(props) => props.font};
  align-items: center;
  justify-content: ${(props) => props.justify};
  border-radius: ${(props) => props.radius};
  border: 1px solid #dce1e7;
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
  height:${props=>props.size}
`;