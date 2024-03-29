import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(105,89,205,.2);
  font-family: "Blinker"
`;

export const HeaderLogo = styled.section`

display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    color: whitesmoke;
  }
  h1 {
    padding-right: 10px;
  }
`;

export const HeaderSearch = styled.section`
  display: flex;
  input {
    border-radius: 10px;
    border: solid 1px #fff;
    background-color: whitesmoke;
    color: black;
    padding-left: 5px;
  }
`;

export const HeaderButtons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: white;
    margin: 0px 5px 0px 5px;
  }

  .botao1:hover {
  border-bottom: 2px solid #ffffff;
  padding: 3px 0; 
  transition: 100ms linear;
  
}
`;
