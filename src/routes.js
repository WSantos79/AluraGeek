import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import { ProdutoProvider } from "./common/context/produto";

function Router() {  
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ProdutoProvider>
                <Routes>
                    <Route exact path="*" element={<Home />} />
                    <Route exact path="produto" element={<Produto />} />
                    <Route exact path="login" element={<Login />} />               
                </Routes>
            </ProdutoProvider>
        </BrowserRouter >
    );
}

export default Router;
