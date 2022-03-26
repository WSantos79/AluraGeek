import React from "react";
import { Container, Legend, Adicionar, Procurar, InputDisable, Div, ArrastaImg, InputDois, MensagemDois, Form } from "./styles";
import { Label, Fieldset } from "../UI";

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

                    <Label htmlFor="name" aria-label="Digite o nome do Produto">
                    Nome do produto
                    </Label>
                    <InputDois id="name" type="text" required/>
                    <Label htmlFor="valor" aria-label="Digite o valor do Produto">
                    Preço do produto
                    </Label>              
                    <InputDois id="valor" type="number" min="1" step="any" required/>
                    <MensagemDois placeholder="Descrição do produto" required/>   
                </Fieldset>
                <Adicionar type="submit">Adicionar produto</Adicionar>
          </Form>     

        </Container>
    </>
  );
};