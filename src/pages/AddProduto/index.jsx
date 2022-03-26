import React from "react";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import AddProduto from "../../components/AddProduto";

export default () => {
  return (
    <>
    <Header />      
      <AddProduto />
      <SobreEmpresa />
      <Footer />
    </>
  );
};