import styled from "styled-components";
import {  Categoria, Produto } from "../UI/index";

export const Lista = styled(Categoria)`
    margin: 1rem 0 4rem 0;

@media (max-width: 1080px) {
    margin-bottom: 1rem;
   // grid-template-columns: repeat(6, 1fr); 

    & > section:nth-child(n+3){
       display: block;
      }
    & > section:last-child {
        margin-bottom: 2rem;
    }
}
`

export const ProdutoHome = styled(Produto)`
cursor: auto;
&:hover {
    transform: none;
  }

`