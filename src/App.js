import BannerPrincipal from "./components/BannerPrincipal";
import Header from "./components/Header";
import SobreEmpresa from "./components/SobreEmpresa";
import { GlobalStyle } from "./components/GlobalStyle";
import Footer from "./components/Footer";
import CategoriaProduto from "./components/CategoriaProduto";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <BannerPrincipal/>

      <CategoriaProduto/>

      <SobreEmpresa/>
      <Footer/>
    </>
  );
}

export default App;
