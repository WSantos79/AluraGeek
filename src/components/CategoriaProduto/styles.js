import styled from "styled-components";
import { margimPagina } from "../UI/Variaveis";
import { corBotaoPrimario } from "../UI/Variaveis";
import { corTextoPrimario } from "../UI/Variaveis";

export const Section = styled.section`
  margin: 0 ${margimPagina};
  @media (max-width: 480px) {
    margin: 0 1rem;
  
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    margin: 0 2rem;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0 1rem 0;  
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

  @media (min-width: 481px) and (max-width: 1080px){
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
`;

export const Categoria = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
 

  @media (max-width: 480px) {
    grid-template-columns: repeat(6, 1fr);
    
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
  //width: max-content;  DELETAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  
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

  @media (max-width: 480px) {
    //width: auto;
  }
`;

export const NomeProduto = styled.h4`
  font-weight: 500;
  font-size: 14px;
  color: ${corTextoPrimario};
  margin: 0.5rem 0;
`;