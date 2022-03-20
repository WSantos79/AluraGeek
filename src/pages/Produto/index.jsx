import React from "react";
import BannerPrincipal from "../../components/BannerPrincipal";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import Produto from "../../components/Produto";

export default () => {
  return (
    <>
    <Header />
      <BannerPrincipal />
      <Produto />
      <SobreEmpresa />
      <Footer />
    </>
  );
};