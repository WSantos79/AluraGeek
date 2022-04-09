import React, { useEffect, useState, useRef} from "react";
import { Container, Legend, Adicionar, Procurar, InputDisable, Div, ArrastaImg, InputDois, MensagemDois, Form, InputMoney, Thumb, ChooseCateg, LabelThumb } from "./styles";
import { Label, Fieldset } from "../../styles";
import { currencyConfig, dropHandler, dragOverHandler, selectFile, limpaForm } from "./funcao";
import { uploadImg } from "../../service/api-upload";
import { AddProduto } from "../../service/api";


export default () => {
    const [file, setFile] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState(2);
    const [altValor, setAltValor] = useState('');
    const [img, SetImg] = useState('');
    const isInitialMount = useRef(true);

    useEffect(() => {
        setValor(document.querySelector(`[data-tipo]`).value);
    }, [altValor]);
    
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            AddProduto(nome, valor, img, descricao, categoria); // necessario useEffect para dar o set na img do upload
        }
    }, [img]);

    async function Submit(e) {
        e.preventDefault();   
        await uploadImg(file, SetImg);        
        limpaForm();
    }
    
    return (
    <>
        <Container>
            <Form onSubmit={Submit} method="post">
                <Fieldset>
                    <Legend>Adicionar novo produto</Legend>             
                    <Div>
                        <ArrastaImg 
                        onDrop={(e) => {  dropHandler(e, setFile) }} 
                        onDragOver={(e) => {  dragOverHandler(e) }}
                        >
                            <Thumb data-thumb><LabelThumb htmlFor="procurar"></LabelThumb></Thumb>
                        </ArrastaImg>
                        
                        <span>Ou</span>
                        <Procurar htmlFor="procurar"/>
                        <InputDisable 
                        onChange={(e) => {  selectFile(e, setFile) }} 
                        data-file type="file" id="procurar" accept="image/*" 
                        />
                    </Div>

                    <Label htmlFor="nomeproduto" aria-label="Digite o nome do Produto">Nome do produto</Label>
                    <InputDois data-nomeprod
                    name="nomeproduto" type="text" required minLength={3} 
                    onChange={(e) => { setNome(e.target.value)}}
                    />

                    <Label htmlFor="valor" aria-label="Digite o valor do Produto">Preço do produto</Label>              
                    <InputMoney
                    onChange={(e) => { setAltValor(e.target.value)}}
                    data-tipo='preco' name="valor" currency="BRL" config={currencyConfig} required/>
                   
                    <MensagemDois data-desc
                    placeholder="Descrição do produto" required minLength={5}
                    onChange={(e) => { setDescricao(e.target.value)}}
                    />

                    <label>Escolha a categoria do produto: 
                        <ChooseCateg data-cat onChange={(e) => { setCategoria(e.target.value)}}>
                            <option value={1} >Star Wars</option>
                            <option value={2} selected>Consoles</option>
                            <option value={3} >Diversos</option>
                        </ChooseCateg>
                    </label>
                </Fieldset>               
                <Adicionar type="submit">Adicionar produto</Adicionar>
          </Form>
        </Container>
    </>
  );
};