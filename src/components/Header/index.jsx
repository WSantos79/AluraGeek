import React, { useEffect } from "react";
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
import { valida } from "../../scripts/validacoes";

export default () => {

  const inputs = document.querySelectorAll('input, textarea') //exibindo msgm de erro validaçoes de formularios
  inputs.forEach(input => {
      input.addEventListener('blur', (e) => {
          valida(e.target);
      })
  })

  const { setProduto } = useContext(ProdutoContext);
  const navigate = useNavigate();
  const [isFound, setIsFound] = useState(false); // informar se achou produto
  const [firstUpdate, setFirstUpdate] = useState(true);

  useEffect(() => { // verificando se foi achado algum produto na busca para redirecionar a pag
    if(firstUpdate) {
      setFirstUpdate(false);
    } else {
      if(isFound){
        navigate(`/produto?busca`, { message: 'Produto encontrado!' });
      }
    }
  }, [isFound]);

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
                      alert('Busque por uma palavra maior que 3 letras !');
                    } else {
                      getBusca(digitado, setProduto, setIsFound)                    
                    }
                  }                
                }}           
              ></Busca>
              <Span data-found>Produto não encontrado!</Span>
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
