import Right from "../../assets/images/right.svg";
import {  Section,  Div,  H1,  VerTudo,  Categoria,  Foto,  NomeProduto,  Valor,  VerProduto,  A,  Produto,} from "../../styles";
import { useContext, useState, useEffect } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { Link } from "react-router-dom";
import { getCategorias, getProdutosHome, getShowProduto, getAllProdCateg } from "../../service/api";

export default () => {
  const [homeProdutos, setHomeProdutos] = useState('');

  const { setProduto, setCategoria, allCategorias, setAllCategorias } = useContext(ProdutoContext);

  useEffect(() => {
    getCategorias(setAllCategorias);
    getProdutosHome(setHomeProdutos);
  }, []);

  return (
    <>
      {allCategorias.length && (
        <>
          {allCategorias.map((categoria) => {
            return (
              <Section key={categoria.id} id={categoria.nome}>
                <Div>
                  <H1>{categoria.nome}</H1>
                  <VerTudo>
                    <A
                      onClick={() => {
                        getAllProdCateg(categoria.id, categoria.nome, setCategoria);
                      }}
                      to={`/produtos/categoria`}
                    >
                      Ver tudo
                    </A>
                    <img src={Right} />
                  </VerTudo>
                </Div>
                <Categoria>
                  {homeProdutos.length && (
                    <>
                      {homeProdutos
                        .slice(
                          categoria.id === 1 ? 0 : categoria.id === 2 ? 6 : 12,
                          categoria.id === 1 ? 6 : categoria.id === 2 ? 12 : 18
                        )
                        .map((produto) => {
                          return (
                            <Produto
                              key={produto.id}
                              onClick={() => {
                                getShowProduto(produto.id, setProduto);
                              }}
                            >
                              <Link to={`/produto?${produto.nome.replace(/\s/g, '')}`}>
                                <Foto src={produto.imagem}></Foto>
                                <NomeProduto>{produto.nome}</NomeProduto>
                                <Valor>{produto.valor}</Valor>
                              </Link>
                              <VerProduto>
                                <A to="/produto">Ver produto</A>
                              </VerProduto>
                            </Produto>
                          );
                        })}
                    </>
                  )}
                </Categoria>
              </Section>
            );
          })}
        </>
      )}
    </>
  );
};
