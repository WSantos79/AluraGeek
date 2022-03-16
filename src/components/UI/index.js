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

  &:hover {
      cursor: pointer;
      background: ${corBotaoPrimarioHover};
  }
`