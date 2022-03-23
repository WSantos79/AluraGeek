import appConfig from "../../config.json";
import {  Section,  H1, Foto,  NomeProduto,  Valor} from "../UI/index";

import { Lista, ProdutoHome, Nada } from "./styles";

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
                    <ProdutoHome key={produto.categoria + produto.id}>
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