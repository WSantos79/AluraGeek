import React from "react";
import Right from "../../assets/images/right.svg";
import styled from "styled-components";
import { margimPagina } from "../UI/Variaveis";
import { corBotaoPrimario } from "../UI/Variaveis";
import appConfig from "../../config.json";
import { corTextoPrimario } from "../UI/Variaveis";

export const Section = styled.section`
  margin: 0 ${margimPagina};
  
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VerTudo = styled.div`
  display: flex;
  align-self: center;
  margin-top: 4rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline ${corBotaoPrimario};
  }
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: ${corTextoPrimario};
  margin: 4rem 0 1rem 0;
`;
export const A = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${corBotaoPrimario};
  margin-right: 12px;
  text-decoration: none;
`;

export const Categoria = styled.div`
  display: grid; 
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
`;

export const Produto = styled.section`

`;

export const Valor = styled.span`
  color: ${corTextoPrimario};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin: 5rem 0;
`;

export const VerProduto = styled(VerTudo)`
margin-top: 0.5rem;  

`
export const Ver = styled(A)`
  display:inherit;
`;

export const Foto = styled.img`
  width: 100%;
  object-fit: cover;

`;

export const NomeProduto = styled.h4`
  font-weight: 500;
  font-size: 14px;
  color: ${corTextoPrimario};
  margin: 0.5rem 0;
`;

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
              {categoria.produtos.map((produto) => {
                return (
                  <Produto>
                    <Foto src={produto.imagem}></Foto>
                    <NomeProduto>{produto.nome}</NomeProduto>
                    <Valor>{produto.valor}</Valor>
                    <VerProduto>
                    <Ver href="#">Ver produto</Ver>
                    </VerProduto>
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

/*
 <NomeProduto>{produto.nome}</NomeProduto>
                  <Valor>{produto.valor}</Valor>
                   <VerProduto>Ver produto</VerProduto>
                  
*/
