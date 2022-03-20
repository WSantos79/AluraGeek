import React from "react";
import styled from "styled-components";
import { corTextoPrimario } from "../UI/Variaveis";


export const Container = styled.div``;
export const Produto = styled.section``;


export const Foto = styled.img`
  width: 560px;
  height: 403px;
`;
export const Nome = styled.p`
    font-weight: 500;
    font-size: 52px;
    line-height: 61px;
    color: ${corTextoPrimario};

  @media (max-width: 1080px) {
    font-size: 22px;
    line-height: 26px;
  }
`;
export const Valor = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${corTextoPrimario};
`;
export const Descricao = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${corTextoPrimario};

  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 16px;
  }
`;


export default () => {
  return (
    <>
      <Container>
        <Produto>
          <Foto src="https://github.com/WSantos79/AluraGeek/blob/main/src/assets/images/produtos/starwars/one.png?raw=true"></Foto>
          <Nome>Produto XYZ</Nome>
          <Valor>R$ 60,00</Valor>
          <Descricao>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
          Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.
          A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</Descricao>
        </Produto>
      </Container>
    </>
  );
};
