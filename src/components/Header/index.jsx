import React from "react";
import logo from "../../assets/images/logo.svg";
import { Header, Div, Busca, Login, IconBusca, IconCancel } from "./styles";
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
            <img data-logo src={logo} alt="Logo do site Alura Geek"></img>
          </Link>
          <Busca
            data-busca
            placeholder="O que deseja encontrar?"
            type="search"
          ></Busca>
        </Div>

        <Link to="/login">
          <Login data-login>Login</Login>
        </Link>

        <IconBusca
          data-iconBusca
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
