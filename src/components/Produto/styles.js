import styled from "styled-components";
import { corTextoPrimario, corFundo } from "../UI/Variaveis";

export const Container = styled.div`
  padding: 4rem 0 4rem 0;
  background: ${corFundo};
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 0 0 1rem 0;
    display: block;
  }
  @media (min-width: 481px) and (max-width: 1080px) {
    padding: 0 0 2rem 0;
  }
`;
export const ProdutoDestaq = styled.section`
  display: flex;
  height: 403px;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    display: inherit;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    height: 221px;
  }
`;
/*
export const Foto = styled.div`
  width: 560px;
  height: 403px;
  background-repeat: no-repeat;
  background-size: cover;

  & > img:first-child {
    width: max-content;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 192px;
  }
  @media (min-width: 481px) and (max-width: 1080px) {
    width: 254px;
    height: 157px;
  }
`;
*/
export const Foto = styled.img`
  width: 560px;
  height: 403px;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  & > img:first-child {
    width: max-content;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 192px;
  }
  @media (min-width: 481px) and (max-width: 1080px) {
    width: 254px;
    height: 157px;
  }
`
/*
box-sizing: border-box;
padding: 0;
border: none;
margin: auto;
display: block;
width: 0;
height: 0;
min-width: 100%;
max-width: 100%;
min-height: 100%;
max-height: 100%;
object-fit: cover;


*/

export const Div = styled.div`
  width: 560px;
  height: 210px;
  margin-left: 1rem;
  word-wrap: break-word;
  @media (max-width: 480px) {
    width: 92%;
    height: 189px;
    margin: 1rem 1rem 2rem 1rem;
  }
  @media (min-width: 481px) and (max-width: 1080px) {
    width: 57%; //434px
    height: 157px;
  }
`;

export const Nome = styled.p`
  font-weight: 500;
  font-size: 52px;
  line-height: 61px;
  color: ${corTextoPrimario};
  margin: 8px 0;
  @media (max-width: 1080px) {
    font-size: 22px;
    line-height: 26px;
  }
`;
export const Preco = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${corTextoPrimario};
`;
export const Descricao = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${corTextoPrimario};
  margin: 8px 0;

  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 16px;    
  }
`;