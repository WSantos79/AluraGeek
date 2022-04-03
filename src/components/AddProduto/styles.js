import styled from "styled-components";
import { brancoFundo, corTextoPrimario, margimPagina } from "../../styles/Variaveis";
import { BotaoPrimario, Mensagem, Input } from "../../styles";
import imagem from "../../assets/images/add-img.svg"
import mais from "../../assets/images/mais.svg"
import IntlCurrencyInput from "react-intl-currency-input"

export const Container = styled.div`
    width: 100%;
    height: 515px;
   
    margin: 4rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {        
        height: 485px;
        margin: 2rem 0;
    }
   
    @media (min-width: 481px) and (max-width: 1080px) {       
       height: 503px;
       margin: 2rem 0;
    }
`
export const Form = styled.form`
    width: 559px;
    height: 515px;
    margin: 0 ${margimPagina};    
  
    @media (max-width: 480px) {
        width: 92%;
        margin: 0;
    }

    @media (min-width: 481px) and (max-width: 1080px) {
        width: 100%;
        height: 503px;
        margin: 0 2rem;
    }


`
export const Legend = styled.legend`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: ${corTextoPrimario};
    margin-bottom: 1rem;

    @media (max-width: 1080px) {
        font-size: 22px;
        line-height: 26px;
    }
`
export const Div = styled.div`
    width: 559px;
    height: 152px;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
        width:100%;        
    }

    & > span {
        margin: 0 0.5rem;
        font-size: 16px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #464646;

        @media (max-width: 480px) {
            display: none;
        }
      }

`

export const ArrastaImg = styled.div`
    width: 282px;
    height: 152px;
    background: ${brancoFundo} url(${imagem}) center 2rem no-repeat;
    outline: 2px dashed #C8C8C8;
    
    display: flex;    
    text-align: center;
    align-items: center;  
    justify-content: center;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #6B6B6B;
    
    &:after {
        padding: 80px 2rem 2rem 2rem;
        content: 'Arraste para adicionar uma imagem para o produto';       
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 134px;
        background: ${brancoFundo} url(${mais}) center 2rem no-repeat;

        &:after {           
            //padding: 81px 3em 2rem 3em;
            content: 'Adicionar uma imagem para o produto';
        }
    }
`
export const Adicionar = styled(BotaoPrimario)`
    width: 100%;

    @media (max-width: 1080px) {
        padding: 1rem;
    }
`
export const Procurar = styled.label`  
  padding: 1rem;
 
  background: #ffffff;
  outline: 1px solid #2a7ae4;
  color: #2a7ae4;
  box-sizing: border-box;  

  font-size: 1rem;
  transition-duration: 300ms;  
  transition-timing-function: ease-out;
  word-break:keep-all;

  &:after {
    content: 'Procure no seu computador';
 }

  &:hover {
      transition: opacity .5s linear;
      background: #d4e4fa;
      cursor: pointer;
  }

  @media (max-width: 480px) {
    display: none;
}
  @media (min-width: 481px) and (max-width: 1080px) {
    font-size: 14px;
    &:after {
        content: 'Procure no seu tablet';
    }

}
`
export const InputDisable = styled.input`
    display: none;
`

export const InputDois = styled(Input)`
    width: 100%;   
`
export const InputMoney = styled(IntlCurrencyInput)`
font-size: 1rem;
color: ${corTextoPrimario};
margin: 0.5rem 0 1rem 0;
display: flex;
align-items: center;

border-radius: 4px;
padding: 28px 0 8px 12px;
width: 560px;

border: none;
border-bottom: 1px solid #c8c8c8;

&[type=number]::-webkit-inner-spin-button, 
&[type=number]::-webkit-outer-spin-button,
&[type=number] { 
  -webkit-appearance: none;    
  -moz-appearance: textfield;    
}

&:focus {
  outline: 1px solid #c8c8c8;
}

&::placeholder {
  font-size: 1rem;    
}

@media (max-width: 480px) {
  width: 328px;
}

@media (min-width: 481px) and (max-width: 1080px) {
  width: 434px;
}
`
export const MensagemDois = styled(Mensagem)`
    width: 100%;
`