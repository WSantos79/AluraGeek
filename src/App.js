import BannerPrincipal from "./components/BannerPrincipal";
import Cabecalho from "./components/Cabecalho";
import FooterSobreEmpresa from "./components/FooterSobreEmpresa";
import { GlobalStyle } from "./components/GlobalStyle";
import Rodape from "./components/Rodape";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Cabecalho/>
      <BannerPrincipal/>

      <FooterSobreEmpresa/>
      <Rodape/>
    </>
  );
}

export default App;
