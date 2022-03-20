import React from "react";
import { Container, Form, Legenda, Input, Entrar } from "./styles";

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
            <Entrar>Entrar</Entrar>
          </fieldset>
        </Form>
      </Container>
    </>
  );
};
