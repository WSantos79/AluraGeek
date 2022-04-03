import React from "react";
import logo from "../../assets/images/logo.svg";
import { BotaoPrimario, Label, Input, Fieldset, Mensagem } from "../../styles";
import { Container, Section, Logo, Item, Link, LastItem } from "./styles";

export default () => {
  return (
    <>
      <Section>
        <Container>
          
          <Logo src={logo} alt="Logo do site Alura Geek"></Logo>
          <ul>
            <Item><Link href="#">Quem somos nós</Link></Item>
            <Item><Link href="#">Política de privacidade</Link></Item>
            <Item><Link href="#">Programa fidelidade</Link></Item>
            <Item><Link href="#">Nossas lojas</Link></Item>
            <Item><Link href="#">Quero ser franqueado</Link></Item>
            <LastItem><Link href="#">Anuncie aqui</Link></LastItem>
          </ul>

          <form action="#">
            <Fieldset>
              <legend>Fale conosco</legend>
              <Label htmlFor="name" aria-label="Digite seu nome">
                Nome
              </Label>
              <Input id="name" type="text" required minLength={3}/>
              <Mensagem placeholder="Escreva sua mensagem" required minLength={5}/>
            </Fieldset>
            <BotaoPrimario type="submit">Enviar mensagem</BotaoPrimario>
          </form>      
        </Container>
      </Section>
    </>
  );
};
