import React from "react";
import { BotaoPrimario } from "../UI";
import { Banner, Conteudo, H1, H2 } from "./styles";

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
