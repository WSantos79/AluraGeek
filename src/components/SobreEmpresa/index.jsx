import React from "react";
import logo from "../../assets/images/logo.svg";
import { BotaoPrimario } from "../UI";
import { Container, Section, Logo, Item, Link, LastItem, Fieldset, LabelNome, Nome, Mensagem } from "./styles";

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

          <form>
            <Fieldset>
              <legend>Fale conosco</legend>
              <LabelNome for="name" aria-label="Digite seu nome">
                Nome
              </LabelNome>
              <Nome id="name" type="text" required/>
              <Mensagem placeholder="Escreva sua mensagem" required/>
            </Fieldset>
            <BotaoPrimario type="submit">Enviar mensagem</BotaoPrimario>
          </form>      
        </Container>
      </Section>
    </>
  );
};
