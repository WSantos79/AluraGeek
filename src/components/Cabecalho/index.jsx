import React from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 152px;
`;
export const Div = styled.div`
    display: flex;
    align-items: center;
`
export const Input = styled.input`
  border: none;

  background: #f5f5f5 235px url(${search});
  background-repeat: no-repeat;

  font-family: "Raleway";
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  /*aqqq  */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;

  position: static;
  width: 272px;
  height: 40px;
  left: calc(50% - 272px / 2 + 66px);
  top: 0px;

  /* Preto/05% */

  border-radius: 20px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 32px;

  text-indent: 10px;
`;
export const Login = styled.button`
  width: 132px;
  height: 41px;
  
  background: #ffffff;
  border: 1px solid #2a7ae4;
  color: #2a7ae4;
  box-sizing: border-box;

  font-family: "Raleway";
  font-size: 16px;
  

  &:hover {
    background: #d4e4fa;
    cursor: pointer;
  }
`;

export default () => {
  return (
    <>
      <Container>
        <Div>
          <img src={logo} alt="Logo do site Alura Geek"></img>
          <Input placeholder="O que deseja encontrar?" type="search"></Input>
        </Div>
        <Login>Login</Login>
      </Container>
    </>
  );
};
