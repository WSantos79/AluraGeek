import React from "react";
import logo from "../../assets/images/logo.svg";
import { Header, Div, Busca, Login, IconBusca, IconCancel } from "./styles";
import search from "../../assets/images/icon-search.png";
import cancel from "../../assets/images/cancel.png";
import { showSearch, disableSearch } from "./funcao";
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

export default () => {
  //const history = useHistory();
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
        
        
        <Login data-login><Link to="/login">Login</Link></Login>
        
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
