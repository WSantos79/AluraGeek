import BannerPrincipal from "./components/BannerPrincipal";
import Header from "./components/Header";
import SobreEmpresa from "./components/SobreEmpresa";
import { GlobalStyle } from "./components/GlobalStyle";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <BannerPrincipal/>

      <SobreEmpresa/>
      <Footer/>
    </>
  );
}

export default App;
