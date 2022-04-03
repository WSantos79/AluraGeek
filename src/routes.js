import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import { ProdutoProvider } from "./common/context/produto";
import ProdutoAdm from "./pages/ProdutoVendedor";
import VerCategoria from "./pages/VerCategoria";
import AddProduto from "./pages/AddProduto";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import SobreEmpresa from "./components/SobreEmpresa";
import Footer from "./components/Footer";


function Router() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ProdutoProvider> 
            <Header/>              
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/produto" element={<Produto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/produto/home" element={<ProdutoAdm />} />
                    <Route path="/produtos/categoria" element={<VerCategoria />} />
                    <Route path="/produto/add" element={<AddProduto />} />
                </Routes> 
            </ProdutoProvider>
            <SobreEmpresa/>
            <Footer/>                   
        </BrowserRouter >
    );
}

export default Router;
