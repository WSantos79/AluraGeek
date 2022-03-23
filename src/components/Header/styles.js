import styled from "styled-components";
import search from "../../assets/images/search.svg";
import { corTextoInput, corFundo } from "../UI/Variaveis";
import { margimPagina } from "../UI/Variaveis";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      width: 150px;

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
  margin: 0px 2rem; 
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
export const Login = styled(Link)`  
  padding: 1rem 70px;
 
  background: #ffffff;
  border: 1px solid #2a7ae4;
  color: #2a7ae4;
  box-sizing: border-box;

  

  font-size: 1rem;
  transition-duration: 300ms;  
  transition-timing-function: ease-out;

  &:hover {
      transition: opacity .5s linear;
      background: #d4e4fa;
      cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 12px 47.5px;
    font-size: 14px;
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
}
  @media (min-width: 481px) and (max-width: 1080px) {
    padding: 12px 64px;
    font-size: 14px;
}
`
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