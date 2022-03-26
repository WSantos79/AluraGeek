import styled from "styled-components";
import search from "../../assets/images/search.svg";
import { corTextoInput, corFundo, brancoFundo } from "../UI/Variaveis";
import { margimPagina } from "../UI/Variaveis";

export const Container = styled.div`
  background: ${brancoFundo};
  width: 100%;
  height: 115px;
  
  display: flex;
  
  @media (max-width: 1080px) {
    height: 72px;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem ${margimPagina};
  
  & > a {
    text-decoration: none;
    color: #2a7ae4;
  }
  
  @media (max-width: 480px) {
    margin: 1rem 1rem;
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    margin: 1rem 2rem;
  }
`;
export const Div = styled.div`
    display: flex;
    align-items: center; 
    
`
export const Logo = styled.img`
  width: 176px;
  
@media (max-width: 1080px) {  
      width: 140px;

      visibility: visible;
      opacity: 1;
      -webkit-transition: opacity 600ms, visibility 600ms;
      transition: opacity 600ms, visibility 600ms;
}
`

export const Busca = styled.input`
  border: none;
  background: ${corFundo} 360px url(${search});
  background-repeat: no-repeat;
   
  font-size: 14px;
  color: ${corTextoInput};  
  padding: 8px 16px;

  width: 393px;
  height: 40px;
  
  border-radius: 20px;
  margin-left: 2rem; 
  text-indent: 10px;

  @media (max-width: 480px) {   
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
    padding: 0;
    background: ${corFundo};
    width: 0px;
    margin: 0;    
  }

 @media (min-width: 481px) and (max-width: 1080px) {
    width: 272px;
    background: ${corFundo} 245px url(${search});
    background-repeat: no-repeat;
  }
`;

export const IconBusca = styled.img`
    display: none;
    width: 20px;
    cursor: pointer;
    @media (max-width: 480px) {
        display: block;        
        //margin-left: 10px
    }
`

export const IconCancel = styled.img`
    display: none;
    cursor: pointer;
    //margin-left: 10px;
    align-self: center;
`
;