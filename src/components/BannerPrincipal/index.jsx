import React from "react";
import banner from "../../assets/images/banner.png";
import styled from "styled-components";

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
    margin-bottom: 32px;

`
export const H1 = styled.h1`
  
`;

export const H2 = styled.h2`

`

export const BotaoPrimario = styled.button`
  //color: #FFFFFF;


  &:hover {
      cursor: pointer;
  }
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
