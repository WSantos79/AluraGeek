import React from "react";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import { H1 } from "./styles";

export default () => {
  return (
    <>
    <Header />      
      <H1>Página não encontrada.</H1>
      <SobreEmpresa />
      <Footer />
    </>
  );
};