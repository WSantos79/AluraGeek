import React from "react";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import VerTodaCategoria from "../../components/VerTodaCategoria";

export default () => {
  return (
    <>
      <Header />  
      <VerTodaCategoria />
      <SobreEmpresa />
      <Footer />
    </>
  );
};