import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import { ProdutoProvider } from "./common/context/produto";
import ProdutoAdm from "./pages/ProdutoVendedor";
import VerCategoria from "./pages/VerCategoria";
import AddProduto from "./pages/AddProduto";
import NotFound from "./pages/NotFound";

function Router() {
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ProdutoProvider>                
                <Routes>
                    <Route exact path="*" element={<NotFound />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/produto" element={<Produto />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/produto/home" element={<ProdutoAdm />} />
                    <Route exact path="/produtos/categoria" element={<VerCategoria />} />
                    <Route exact path="/produto/add" element={<AddProduto />} />
                </Routes>                
            </ProdutoProvider>
        </BrowserRouter >
    );
}

export default Router;
