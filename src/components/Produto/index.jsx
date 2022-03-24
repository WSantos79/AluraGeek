import React from "react";
import appConfig from "../../config.json";
import {
  Section,
  Div as DivCategoria,
  H1,
  Categoria,
  Foto as FotoMenor,
  NomeProduto,
  Valor,
  VerProduto,
  Ver,
  Produto,
} from "../UI/index";
import {
  Container,
  ProdutoDestaq,
  Foto,
  Span,
  SpanUm,
  Div,
  Nome,
  Preco,
  Descricao,
} from "./styles";
import { useContext } from "react";
import { ProdutoContext } from "../../common/context/produto";
import { scrollToTop } from "../UI/Variaveis";
import { useEffect } from "react";

export default () => {
  const { produto, categoria, setProduto, setCategoria } =
    useContext(ProdutoContext);

  useEffect(() => {
    scrollToTop();
  }, [produto, categoria]);

  /*
<Foto
            style={{
              background: `center / cover no-repeat url("${appConfig.categorias[categoria].produtos[produto].imagem}")`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
          ></Foto>


*/
  return (
    <>
      <Container>
        <ProdutoDestaq>
          
            
              <Foto
                src={appConfig.categorias[categoria].produtos[produto].imagem}
              ></Foto>
            
          
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
          {appConfig.categorias[categoria].produtos.slice(0, 6).map((item) => {
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
                  <Ver href="#">Ver produto</Ver>
                </VerProduto>
              </Produto>
            );
          })}
        </Categoria>
      </Section>
    </>
  );
};
