import React, { useState, useContext, useEffect } from "react";
import {  Section,  Div as DivCategoria,  H1,  Categoria,  Foto as FotoMenor,  NomeProduto,  Valor,  VerProduto,  A,  Produto,} from "../../styles";
import {  Container,  ProdutoDestaq,  Foto,  Preco,  Descricao,  Nome,  Div,} from "./styles";

import { ProdutoContext } from "../../common/context/produto";
import { getProdutosSimilares, getShowProduto } from "../../service/api";

export default () => {
  const { produto, setProduto } = useContext(ProdutoContext);
  const [similares, setSimilares] = useState('');
  const [page, setPage] = useState(true);

  const togglePage = () => {
    setPage((page) => !page)
  }
  
  window.scrollTo(0, 0);

  useEffect(() => {
    getProdutosSimilares(produto.categoria_id, setSimilares, page ? 2 : 1);
  }, [produto]);
  
  return (
    <>
      <Container>
        <ProdutoDestaq>
          <Foto src={produto.imagem}></Foto>
          <Div>
            <Nome>{produto.nome}</Nome>
            <Preco>{produto.valor}</Preco>
            <Descricao>{produto.descricao}</Descricao>
          </Div>
        </ProdutoDestaq>
      </Container>

      <Section>
        <DivCategoria>
          <H1>Produtos similares</H1>
        </DivCategoria>
        <Categoria>
          {similares.length && (
            <>
              {similares.map((item) => {
                return (
                  <Produto
                    key={item.id}
                    onClick={() => {
                      getShowProduto(item.id, setProduto);
                      togglePage();
                    }}
                  >
                    <A to={`#`}> 
                      <FotoMenor src={item.imagem}></FotoMenor>
                      <NomeProduto>{item.nome}</NomeProduto>
                      <Valor>{item.valor}</Valor>
                    </A>
                    <VerProduto>
                      <A to={`#`}>Ver produto</A>
                    </VerProduto>
                  </Produto>
                );
              })}
            </>
          )}
        </Categoria>
      </Section>
    </>
  );
};
