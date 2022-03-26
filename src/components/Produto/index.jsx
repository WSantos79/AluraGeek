import React from "react";
import appConfig from "../../config.json";
import {
  Section, Div as DivCategoria,  H1,  Categoria,  Foto as FotoMenor,  NomeProduto,  Valor,  VerProduto,  A,  Produto,} from "../UI/index";
import {
  Container,  ProdutoDestaq,  Foto, Preco, Descricao, Nome, Div} from "./styles";
import { useContext } from "react";
import { ProdutoContext } from "../../common/context/produto";

export default () => {
  const { produto, categoria, setProduto, setCategoria } = useContext(ProdutoContext);  
  window.scrollTo(0, 0); 

  return (
    <>
      <Container>
        <ProdutoDestaq>                
          <Foto src={appConfig.categorias[categoria].produtos[produto].imagem}></Foto>
          <Div>
            <Nome>
              {appConfig.categorias[categoria].produtos[produto].nome}
            </Nome>
            <Preco>
              {appConfig.categorias[categoria].produtos[produto].valor}
            </Preco>
            <Descricao>
              {appConfig.categorias[categoria].produtos[produto].descricao}
            </Descricao>
          </Div>
        </ProdutoDestaq>
      </Container>

      <Section>
        <DivCategoria>
          <H1>Produtos similares</H1>
        </DivCategoria>
        <Categoria>      
          {appConfig.categorias[categoria].produtos.slice(produto < 6 ? 6 : 0, produto < 6 ? 12 : 6).map((item) => {
            return (
              <Produto
                key={item.id}
                onClick={() => {  
                  setCategoria(item.categoria);
                  setProduto(item.id);
                }}
              >
                <FotoMenor src={item.imagem}></FotoMenor>
                <NomeProduto>{item.nome}</NomeProduto>
                <Valor>{item.valor}</Valor>
                <VerProduto>
                  <A to={`#`}>Ver produto</A>
                </VerProduto>
              </Produto>
            );
          })}
        </Categoria>
      </Section>
    </>
  );
};
