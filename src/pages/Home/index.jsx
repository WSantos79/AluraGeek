import BannerPrincipal from "../../components/BannerPrincipal";
import Header from "../../components/Header";
import SobreEmpresa from "../../components/SobreEmpresa";
import Footer from "../../components/Footer";
import CategoriaProduto from "../../components/CategoriaProduto";


export default () => {
  return (
    <>     
      <Header />
      <BannerPrincipal />
      <CategoriaProduto />
      <SobreEmpresa />
      <Footer />
    </>
  );
};
