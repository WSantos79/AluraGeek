import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { corTextoInput } from "../UI/Variaveis";
import { BotaoPrimario } from "../UI";

export const Container = styled.div`
  width: 100%;
  height: 368px;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #eaf2fd;
`;
export const Conteudo = styled.div`
  width: 1136px;
  height: 240px;

  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
    max-width: 176px;
    max-height: 50px; 

`

export const Nav = styled.ul`   

`;
export const Item = styled.li`
    font-weight: 500;
    font-size: 1rem;
    margin: 0 0 24px 0;
    list-style-type: none;    
`;
export const Link = styled.a`
    text-decoration: none;
    color: #464646;
`
export const FaleConosco = styled.div``;

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Nome = styled.input`
  font-size: 1rem;
  color: #464646;
  margin: 0.5rem 0 1rem 0;
  display: flex;
  align-items: center;

  border-radius: 4px;
  padding: 28px 0 8px 12px;
  width: 560px;

  border: none;
  border-bottom: 1px solid #c8c8c8;
 
  &::placeholder {
    font-size: 1rem;    
  }
`;
export const LabelNome = styled.label`
  position: absolute;
  margin: 0.5rem 0 0 12px;
  color: ${corTextoInput};
  font-size: 12px;
`;

export const Mensagem = styled.textarea`
    font-size: 1rem;
    border-radius: 4px;
    resize: none;
    border: none;
    border-bottom: 1px solid #c8c8c8;
    padding: 1rem 0 0 12px;
    margin-bottom: 0.5rem;
    height: 82px;
    width: 560px;

    &::placeholder {
        font-size: 1rem;
        color: ${corTextoInput};
    }
`

export default () => {
  return (
    <>
      <Container>
        <Conteudo>
          <Logo src={logo} alt="Logo do site Alura Geek"></Logo>
          <Nav>
            <Item><Link href="#">Quem somos nós</Link></Item>
            <Item><Link href="#">Política de privacidade</Link></Item>
            <Item><Link href="#">Programa fidelidade</Link></Item>
            <Item><Link href="#">Nossas lojas</Link></Item>
            <Item><Link href="#">Quero ser franqueado</Link></Item>
            <Item><Link href="#">Anuncie aqui</Link></Item>
          </Nav>
          <FaleConosco>
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
          </FaleConosco>
        </Conteudo>
      </Container>
    </>
  );
};
