import Right from "../../assets/images/right.svg";
import appConfig from "../../config.json";
import {
  Section,  Div,  H1,  VerTudo, Categoria,  Foto,  NomeProduto,  Valor,  VerProduto,  A,  Produto,} from "../UI/index";
import { useContext } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { Link } from "react-router-dom";

export default () => {
  const { setProduto, setCategoria} = useContext(ProdutoContext);
  return (
    <>
      {appConfig.categorias.map((categoria) => {
        return (
          <Section key={categoria.nome}>
            <Div>
              <H1>{categoria.nome}</H1>
              <VerTudo>
                <A 
                onClick={() => {
                  setCategoria(categoria.produtos[0].categoria);
                }}
                to={`/produtos/categoria`}
                >Ver tudo</A>
                <img src={Right} />
              </VerTudo>
            </Div>
            <Categoria>
              {categoria.produtos.slice(0, 6).map((produto) => {
                return (
                  <Produto key={produto.id}
                    onClick={() => {
                      setCategoria(produto.categoria);
                      setProduto(produto.id);
                    }}>
                    <Link to="/produto">
                      <Foto src={produto.imagem}></Foto>
                      <NomeProduto>{produto.nome}</NomeProduto>
                      <Valor>{produto.valor}</Valor>
                      <VerProduto>
                        <A to="/produto">Ver produto</A>
                      </VerProduto>
                    </Link>
                  </Produto>
                );
              })}
            </Categoria>
          </Section>
        );
      })}
    </>
  );
};
