import styled from "styled-components";

export const Footer = styled.footer`
display:flex;
justify-content: center;
align-items: center;


font-weight: 500;
font-size: 1rem;
color: #464646;

width: 100%;
height: 102px;

@media (max-width: 480px) {
    font-size: 1em;  
}
`

export const Span = styled.span`
    color: red;

`

export const Link = styled.a`
    margin-left: 10px;
    
`
export const Social = styled.img`
    width: 35px;
    &:hover {
        filter: invert(0.07);
    }
`