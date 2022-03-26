import appConfig from "../../config.json";
import {  Section,  H1, NomeProduto,  Valor, Lista, BotaoPrimario} from "../UI/index";
import { ProdutoHome, Imagem, Delet, Edit, FotoProduto, Div } from "./styles";
import Trash from "../../assets/images/trash.png"
import Change from "../../assets/images/edit.png"
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <Section>
        <Div>
          <H1>Todos os produtos</H1>  
          <Link to="/produto/add"><BotaoPrimario>Adicionar produto</BotaoPrimario></Link>
        </Div>
        
        <Lista>
          {appConfig.categorias.map((categoria) => {
            return (
              <>
                {categoria.produtos.map((produto) => {
                  return (
                    <ProdutoHome key={produto.categoria + produto.id}>
                      <Imagem> 
                        <FotoProduto alt={`Foto ilustrativa do produto ${produto.nome}`} src={produto.imagem}/>
                        <Delet alt="Ícone para deletar produto." src={Trash}></Delet>
                        <Edit 
                        onClick={() => {
                          console.log('cliquei')
                        }} 
                        alt="Ícone para deletar produto." src={Change}>                          
                        </Edit>
                      </Imagem>
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