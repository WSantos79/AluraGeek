import React from "react";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import ProdutoAdm from "../../components/ProdutoAdm";

export default () => {
  return (
    <>
    <Header />     
      <ProdutoAdm />
      <SobreEmpresa />
      <Footer />
    </>
  );
};