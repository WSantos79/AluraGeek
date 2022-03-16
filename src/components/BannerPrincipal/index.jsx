import React from "react";
import styled from "styled-components";
import banner from "../../assets/images/banner.png";
import { BotaoPrimario } from "../UI";

export const Banner = styled.section`
  background: url(${banner});
  margin-top: 32px;
  width: 100%;
  height: 20vw;
  max-height: 22rem;
  background-size: cover;
  display: flex;
`;
export const Conteudo = styled.div`
    margin: 0 152px;
    color: #FFFFFF;
    align-self: flex-end;
    margin-bottom: 2rem;

`
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 52px;
  line-height: 61px;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  margin: 1rem 0;
`
export default () => {
  return (
    <>
      <Banner>
        <Conteudo>
          <H1>Dezembro Promocional</H1>
          <H2>Produtos selecionados com 33% de desconto</H2>
          <BotaoPrimario>Ver Consoles</BotaoPrimario>
        </Conteudo>        
      </Banner>
    </>
  );
};
