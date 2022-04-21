import React from "react";
import { Footer, Link, Social, Span } from "./styles";
import GitHub from "../../assets/images/github.svg"
import Linkedin from "../../assets/images/linkedinDark.svg"
import Email from "../../assets/images/gmailDark.svg"

export default () => {
    return (
      <>     
        <Footer>
          <p>©2022 | Desenvolvido com <Span>&#10084;</Span> por Wellington Santos</p>
  
          <Link href="https://www.linkedin.com/in/wellingtonsantos79/" rel="author" target="_blank"><Social alt={`Imagem para o Linkedin do desenvolvedor da página.`} src={Linkedin}/></Link>        
          
          <Link href="https://github.com/WSantos79" rel="author" target="_blank"><Social alt={`Imagem para o github do desenvolvedor da página.`} src={GitHub}/></Link>
  
          <Link href="mailto:wellingtonsantos7799@gmail.com" rel="author" target="_blank"><Social alt={`Imagem para o email do desenvolvedor da página.`} src={Email}/></Link>
  
        </Footer>
      </>
    );
  };
  