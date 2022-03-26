import React from "react";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import Login from "../../components/Login";

export default () => {
  return (
    <>
    <Header />      
      <Login />
      <SobreEmpresa />
      <Footer />
    </>
  );
};