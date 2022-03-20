import React from "react";
import logo from "../../assets/images/logo.svg";
import { Header, Div, Busca, Login, IconBusca, IconCancel } from "./styles";
import search from "../../assets/images/icon-search.png";
import cancel from "../../assets/images/cancel.png";

function showSearch() {
  document.querySelector("[data-busca]").style.display = `block`;
  document.querySelector("[data-iconBusca]").style.display = `none`;
  document.querySelector("[data-login]").style.display = `none`;
  document.querySelector("[data-logo]").style.display = `none`;
  document.querySelector("[data-cancel]").style.display = `block`;
  document.querySelector("[data-header]").style.justifyContent = `space-around`;
}

function disableSearch() {
  document.querySelector("[data-busca]").style.display = `none`;
  document.querySelector("[data-iconBusca]").style.display = `block`;
  document.querySelector("[data-login]").style.display = `block`;
  document.querySelector("[data-logo]").style.display = `block`;
  document.querySelector("[data-cancel]").style.display = `none`;
  document.querySelector("[data-header]").style.justifyContent = `space-between`;
}

export default () => {
  return (
    <>
      <Header data-header>
        <Div>
          <img data-logo src={logo} alt="Logo do site Alura Geek"></img>
          <Busca
            data-busca
            placeholder="O que deseja encontrar?"
            type="search"
          ></Busca>
        </Div>
        <Login data-login>Login</Login>
        <IconBusca
          data-iconBusca
          onClick={() => {showSearch()}}
          src={search}
          alt="Ícone para busca no site"
        />
        <IconCancel onClick={() => {disableSearch()}} src={cancel} alt="" data-cancel />
      </Header>
    </>
  );
};
