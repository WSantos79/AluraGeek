import React from "react";
import { Container, Legend, Adicionar, Procurar, InputDisable, Div, ArrastaImg, InputDois, MensagemDois, Form, InputMoney } from "./styles";
import { Label, Fieldset } from "../../styles";
import { currencyConfig } from "./funcao";

export default () => {
    return (
    <>
        <Container>
            <Form>
                <Fieldset>
                    <Legend>Adicionar novo produto</Legend>             
                    <Div>
                        <ArrastaImg />
                        <span>Ou</span>
                        <Procurar htmlFor="procurar"/>
                        <InputDisable type="file" id="procurar" accept="image/*" />
                    </Div>

                    <Label htmlFor="nomeproduto" aria-label="Digite o nome do Produto">Nome do produto</Label>
                    <InputDois id="nomeproduto" type="text" required minLength={3}/>

                    <Label htmlFor="valor" aria-label="Digite o valor do Produto">Preço do produto</Label>              
                    <InputMoney data-tipo='preco' id="valor" currency="BRL" config={currencyConfig} required/>                  
                   
                    <MensagemDois placeholder="Descrição do produto" required minLength={5}/>                  
                </Fieldset>
                <Adicionar type="submit">Adicionar produto</Adicionar>
          </Form>     

        </Container>
    </>
  );
};