import React from "react";
import logo from "../../assets/images/logo.svg";
import { Header, Div, Busca, Login, IconBusca } from "./styles";
import search from "../../assets/images/icon-search.png";
import { useContext } from "react";
import { ResponsiveContext } from '../../common/context/responsive'

function handleBusca(setTela, tela) {
  setTela(true);
  console.log(tela)
}

export default () => {
  const { setTela, tela } = useContext(ResponsiveContext);

  return (
    <>
      <Header>
        <Div>
          <img src={logo} alt="Logo do site Alura Geek"></img>
          <Busca 
          style={{ /* display: `${tela ? 'block' : 'none'}` */ }}
          placeholder="O que deseja encontrar?" type="search"></Busca>
        </Div>
        <Login>Login</Login>
        <IconBusca 
        style={{ /* display: `${tela ? 'none' : 'block'}` */ }}
        onClick={() => {
            console.log(tela)
            handleBusca(setTela, tela);
          }} 
          src={search} alt="Ícone para busca no site"/>
      </Header>
    </>
  );
};
