import React from "react";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import ProdutoVendedor from "../../components/ProdutoVendedor";

export default () => {
  return (
    <>
    <Header />     
      <ProdutoVendedor />
      <SobreEmpresa />
      <Footer />
    </>
  );
};