import React from "react";
import { Container, Form, Legenda, Input, Entrar } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { getLogin } from "../../service/api";
import { useState, useEffect } from "react";

export default () => {
  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false); 
  const [firstUpdate, setFirstUpdate] = useState(true);

  useEffect(() => {  // informar se o usuario e senha estao corretos e redirecionar a pag
    if(firstUpdate) {
      setFirstUpdate(false);
    } else {
      if(isLogged){
        navigate(`/produto/home`);
      }
    }
  }, [isLogged]);

  const Submit = (e) => {
    e.preventDefault();
    getLogin(email, senha, setIsLogged);
  }

  return (
    <>
      <Container>
        <Form onSubmit={Submit}>
          <fieldset>
            <Legenda>Iniciar Sessão</Legenda>
            <Input onChange={(e) => {setEmail(e.target.value);}} type="email" required placeholder="Escreva seu email"></Input>

            <Input
              type="password"
              required
              placeholder="Escreva sua senha"
              onChange={(e) => {setSenha(e.target.value);}}
            ></Input>

          </fieldset>
           <Entrar type="submit">Entrar</Entrar>
        </Form>        
      </Container>        
    </>
  );
};
