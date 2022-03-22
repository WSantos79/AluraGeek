import appConfig from "../../config.json";
import {  Section,  H1, Foto,  NomeProduto,  Valor,  Produto,} from "../UI/index";

import { Lista, ProdutoHome } from "./styles";

export default () => {
  return (
    <>
      <Section>
        <H1>Todos os produtos</H1>
        <Lista>
          {appConfig.categorias.map((categoria) => {
            return (
              <>
                {categoria.produtos.map((produto) => {
                  return (
                    <ProdutoHome>
                      <Foto src={produto.imagem}></Foto>
                      <NomeProduto>{produto.nome}</NomeProduto>
                      <Valor>{produto.valor}</Valor>
                      <NomeProduto>
                        {`#11111` + produto.categoria + produto.id}
                      </NomeProduto>
                    </ProdutoHome>
                  );
                })}
              </>
            );
          })}
        </Lista>
      </Section>
    </>
  );
};

/*

 <Section>           
            <H1>Todos os produtos</H1>
      {appConfig.categorias.map((categoria) => {
          return (
            <Lista>
              {categoria.produtos.slice(0, 6).map((produto) => {
                return (
                  <Produto>
                    <Link to="/produto">
                      <Foto src={produto.imagem}></Foto>
                      <NomeProduto>{produto.nome}</NomeProduto>
                      <Valor>{produto.valor}</Valor>                      
                      <NomeProduto>{`#11111`+produto.categoria+produto.id}</NomeProduto>
                    </Link>
                  </Produto>
                );
              })}
            </Lista>
        );
    })}
    </Section>

*/
