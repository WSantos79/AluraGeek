import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Produto from "./pages/Produto";

function Router() {
    return (
        <BrowserRouter>
            <GlobalStyle />            
            <Routes>                
                <Route exact path="*" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="produto" element={<Produto />} />
            </Routes>           
        </BrowserRouter >
    );
}

export default Router;
