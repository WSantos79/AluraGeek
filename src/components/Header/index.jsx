import React from "react";
import logo from "../../assets/images/logo.svg";
import { Header, Div, Busca, Login, IconBusca, IconCancel, Logo } from "./styles";
import search from "../../assets/images/icon-search.png";
import cancel from "../../assets/images/cancel.png";
import { showSearch, disableSearch } from "./funcao";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Header data-header>
        <Div>
          <Link to="/Home">
            <Logo data-logo src={logo} alt="Logo do site Alura Geek"></Logo>
          </Link>
          <Busca
            data-busca
            placeholder="O que deseja encontrar?"
            type="search"
          ></Busca>
        </Div>

        
          <Login to="/login" data-login>Login</Login>
        

        <IconBusca
          data-iconbusca
          onClick={() => {
            showSearch();
          }}
          src={search}
          alt="Ícone para busca no site"
        />
        <IconCancel
          onClick={() => {
            disableSearch();
          }}
          src={cancel}
          alt=""
          data-cancel
        />
      </Header>
    </>
  );
};
