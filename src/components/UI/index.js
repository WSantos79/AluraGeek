import styled from "styled-components";
import { corBotaoPrimario, corBotaoPrimarioHover } from "./Variaveis"
import { corTextoPrimario, margimPagina } from "./Variaveis";

export const BotaoPrimario = styled.button`  

  border: none;
  padding: 1rem;
  background: ${corBotaoPrimario};
  
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: #FFFFFF;

  transition-duration: 300ms;  
  transition-timing-function: ease-out;

  &:hover {
      cursor: pointer;
      background: ${corBotaoPrimarioHover};
  }

  @media (max-width: 1080px) {
    padding: 12px 1rem;
    font-size: 14px
  }
`

/* CategoriaProdutos - Produtos Similares // Produtos(vendedor) - Home */

export const Section = styled.section`
  margin: 4rem ${margimPagina} 4rem ${margimPagina};

  @media (max-width: 480px) {
    margin: 1rem;
  
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    margin: 2rem;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;  
`;

export const VerTudo = styled.div`
  display: flex; 
  align-items: center;
  
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

  @media (max-width: 1080px){
    font-size: 22px;
  }
`;
export const A = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${corBotaoPrimario};
  margin-right: 12px;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Categoria = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);  

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    
  & > section:nth-child(n+3){
    display: none;
  }
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    & > section:nth-child(n+5){
      display: none;
    }
  }
`;
export const Produto = styled.section`
  cursor: pointer;
  transition: all ease 0.5s;
  
  & > a:first-child {
    text-decoration: none;
    color: #2a7ae4;
  }

  &:hover {
    transform: scale(1.1);
  }

`
export const Valor = styled.span`
  color: ${corTextoPrimario};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin: 5rem 0;
`;

export const VerProduto = styled(VerTudo)`
  margin-top: 0.5rem;
`;
export const Ver = styled(A)`
  display: inherit;
`;

export const Foto = styled.img`
  width: 100%; 
  object-fit: cover;
  
height: 174px;

`;

export const NomeProduto = styled.h4`
  font-weight: 500;
  font-size: 14px;
  color: ${corTextoPrimario};
  margin: 0.5rem 0;
`;