import styled from "styled-components";
import { corTextoInput, corTextoPrimario, margimPagina } from "../UI/Variaveis";

export const Section = styled.section`
  width: 100%;
  height: 368px;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  
  background: #eaf2fd;

  @media (max-width: 480px) {
    height: 553px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 240px;
 
  display: flex;
  justify-content: space-between;
  margin: 4rem ${margimPagina};

  @media (max-width: 480px) {
    height: 521px;
    flex-direction: column;
    margin: 1rem;
    align-items: center;

  }
  @media (min-width: 481px) and (max-width: 1080px) {
    height: 300px;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 2rem;
    
    & > :last-child {
      align-self:flex-end;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
    max-width: 176px;
    max-height: 50px;    
`
export const Item = styled.li`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 24px;
    list-style-type: none;
    
    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
`;

export const LastItem = styled(Item)`
@media (min-width: 481px) and (max-width: 1080px) {
  margin: 0;
}
`

export const Link = styled.a`
    text-decoration: none;
    color: ${corTextoPrimario};

    &:hover {
      text-decoration: underline;
    }
`

export const Fieldset = styled.fieldset`
  border: none;  
`;

export const Nome = styled.input`
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
 
  &::placeholder {
    font-size: 1rem;    
  }

  @media (max-width: 480px) {
    width: 328px;
  }

  @media (min-width: 481px) and (max-width: 1080px) {
    width: 434px;
  }
`;
export const LabelNome = styled.label`
  position: absolute;
  margin: 0.5rem 0 0 12px;
  color: ${corTextoInput};
  font-size: 12px;
`;

export const Mensagem = styled.textarea`
    font-size: 1rem;
    border-radius: 4px;
    resize: none;
    border: none;
    border-bottom: 1px solid #c8c8c8;
    padding: 1rem 0 0 12px;
    margin-bottom: 0.5rem;
    height: 82px;
    width: 560px;

    &::placeholder {
        font-size: 1rem;
        color: ${corTextoInput};
    }

    @media (max-width: 480px) {
      width: 328px;
    }

    @media (min-width: 481px) and (max-width: 1080px) {
      width: 434px;
    }
`