import styled from "styled-components";
import search from "../../assets/images/search.svg";
import { corTextoInput } from "../UI/Variaveis";
import { margimPagina } from "../UI/Variaveis";


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem ${margimPagina};
  
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

    @media (max-width: 1080px) {
        & > img:first-child {
            width: 150px;
        }   
    }
`
export const Busca = styled.input`
  border: none;
  background: #f5f5f5 360px url(${search});
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
   display: none;
  }

 @media (min-width: 481px) and (max-width: 1080px) {
    width: 272px;
    background: #f5f5f5 245px url(${search});
    background-repeat: no-repeat;
  }
`;
export const Login = styled.a`  
  
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
}
  @media (min-width: 481px) and (max-width: 1080px) {
    padding: 12px 64px;
}
`
export const IconBusca = styled.img`
    display: none;
    width: 20px;
    cursor: pointer;
    @media (max-width: 480px) {
        display: block;        
    }
`
;