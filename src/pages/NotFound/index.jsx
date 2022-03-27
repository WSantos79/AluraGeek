import React from "react";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import { P, P2, P3, P4, P33, Div } from "./styles";
import { BotaoPrimario } from "../../components/UI";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Header />     
        <P>404</P>
        <P2>AH, NÃO!</P2>
        <P3>PÁGINA <P33>NÃO ENCONTRADA.</P33></P3>
        <P4>O endereço solicitado não existe.</P4>
        <Div> 
          <Link to={'/'}><BotaoPrimario>Voltar para Home</BotaoPrimario></Link>
        </Div>
      <SobreEmpresa />
      <Footer />
    </>
  );
};
