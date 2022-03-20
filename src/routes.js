import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import BannerPrincipal from "./components/BannerPrincipal";
import Header from "./components/Header";
import SobreEmpresa from "./components/SobreEmpresa";
import { GlobalStyle } from "./components/GlobalStyle";
import Footer from "./components/Footer";
import CategoriaProduto from "./components/CategoriaProduto";
import { ResponsiveProvider } from './common/context/responsive';

function Router() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ResponsiveProvider>
                <Header />
            </ResponsiveProvider>
            <BannerPrincipal />
            <CategoriaProduto />
            <SobreEmpresa />
            <Footer />
        </BrowserRouter >
    );
}

export default Router;
