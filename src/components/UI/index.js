import styled from "styled-components";
import { corBotaoPrimario, corBotaoPrimarioHover } from "./Variaveis"

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