import React from "react";
import { Container, Form, Legenda, Input, Entrar } from "./styles";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Container>
        <Form>
          <fieldset>
            <Legenda>Iniciar Sessão</Legenda>
            <Input type="text" required placeholder="Escreva seu email"></Input>
            <Input
              type="password"
              required
              placeholder="Escreva sua senha"
            ></Input>
           <Link to="/produto/home"><Entrar>Entrar</Entrar></Link>
          </fieldset>          
        </Form>
      </Container>
        
    </>
  );
};
