import appConfig from "../../config.json";
import { Section, Div,  H1,  Lista,  Foto,  NomeProduto,  Valor,  VerProduto,  A} from "../UI/index"; 
import { Produtos } from "./styles";
import { useContext } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { Link } from "react-router-dom";

export default () => {
  const { categoria, setCategoria, setProduto } = useContext(ProdutoContext);
  window.scrollTo(0, 0);
  return (
    <>
       <Section>
        <Div>
          <H1>{appConfig.categorias[categoria].nome}</H1>
        </Div>
        <Lista>
          {appConfig.categorias[categoria].produtos.map((item) => {
            return (
              <Produtos
                key={item.id}
                onClick={() => {
                  setCategoria(item.categoria);
                  setProduto(item.id);   
                }}>
                <Link to="/produto">
                  <Foto src={item.imagem}></Foto>
                  <NomeProduto>{item.nome}</NomeProduto>
                  <Valor>{item.valor}</Valor>
                  <VerProduto>
                    <A to={`#`}>Ver produto</A>
                  </VerProduto>
                </Link>
              </Produtos>
            );
          })}
        </Lista>
      </Section>     
    </>
  );
};
