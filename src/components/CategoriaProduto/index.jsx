import Right from "../../assets/images/right.svg";
import appConfig from "../../config.json";
import { Section, Div, H1, VerTudo, A, Categoria, Foto, NomeProduto, Valor, VerProduto, Ver, Produto } from "./styles";

export default () => {
  return (
    <>
      {appConfig.categorias.map((categoria) => {
        return (
          <Section>
            <Div>
              <H1>{categoria.nome}</H1>
              <VerTudo>
                <A href="#">Ver tudo</A>
                <img src={Right} />
              </VerTudo>
            </Div>
            <Categoria>
              {categoria.produtos.slice(0, 6).map((produto) => {
                return (
                  <section>
                    <Foto src={produto.imagem}></Foto>
                    <NomeProduto>{produto.nome}</NomeProduto>
                    <Valor>{produto.valor}</Valor>
                    <VerProduto>
                      <Ver href="#">Ver produto</Ver>
                    </VerProduto>
                  </section>
                );
              })}
            </Categoria>
          </Section>
        );
      })}
    </>
  );
};