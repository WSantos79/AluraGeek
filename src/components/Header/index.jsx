import React from "react";
import logo from "../../assets/images/logo.svg";
import { Container, Header, Div, Busca,  IconBusca, IconCancel, Logo, Span, ContainerBusca } from "./styles";
import { BotaoSecundario } from "../../styles";
import search from "../../assets/images/icon-search.png";
import cancel from "../../assets/images/cancel.png";
import { showSearch, disableSearch } from "./func";
import { Link, useNavigate } from "react-router-dom";
import { getBusca } from "../../service/api";
import { useContext, useState } from "react";
import { ProdutoContext } from "../../common/context/produto";

export default () => { 
  const { setProduto } = useContext(ProdutoContext);
  const navigate = useNavigate(); 

  return (
    <>
      <Container> 
        <Header data-header>
          <Div>
            <Link to="/">
              <Logo data-logo src={logo} alt="Logo do site Alura Geek"></Logo>
            </Link> 
            <ContainerBusca> 
              <Busca
                data-busca               
                required
                placeholder="O que deseja encontrar?"
                type="search"
                onKeyUp={(e) => {
                  const busca = document.querySelector("[data-busca]")
                  const key = e.which || e.keyCode;
                  const digitado = e.target.value;
                  
                  if (key == 13) { // codigo da tecla enter    
                    busca.blur(); // tirando o foco
                    if (digitado.length < 4) {
                      const alert = document.querySelector("[data-found]");
                      alert.style.display = 'block';

                      setTimeout(function(){
                        alert.style.display = 'none';
                      },5000);
                    } else {
                      getBusca(digitado, setProduto);
                      e.target.value = '';
                      navigate(`/search`);               
                    }
                  }               
                }}           
              ></Busca>
              <Span data-found>Busque com o mínimo 3 letras</Span>
            </ContainerBusca>
          </Div>
          
          <BotaoSecundario to="/login" data-login>Login</BotaoSecundario>
          
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
      </Container>
    </>
  );
};
