import React, { useState } from "react";
import { Container, Legend, Adicionar, Procurar, InputDisable, Div, ArrastaImg, InputDois, MensagemDois, Form, InputMoney, Thumb } from "./styles";
import { Label, Fieldset } from "../../styles";
import { currencyConfig, dropHandler, dragOverHandler, selectFile } from "./funcao";
import { uploadImg } from "../../service/api-upload";


export default () => {
    const [file, setFile] = useState('');

    const Submit = (e) => {
        e.preventDefault();
        uploadImg(file);        
    }

    return (
    <>
        <Container>
            <Form onSubmit={Submit} method="post">
                <Fieldset>
                    <Legend>Adicionar novo produto</Legend>             
                    <Div>
                        <ArrastaImg data-dragAndDrop 
                        onDrop={(e) => {  dropHandler(e, setFile) }} 
                        onDragOver={(e) => {  dragOverHandler(e) }}
                        >
                            <Thumb data-thumb/>
                        </ArrastaImg>
                        
                        <span>Ou</span>
                        <Procurar htmlFor="procurar"/>
                        <InputDisable 
                        onChange={(e) => {  selectFile(e, setFile) }} 
                        data-file type="file" id="procurar" accept="image/*" 
                        />
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