import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-geek-commerce.herokuapp.com'
});


export const getProdutosPorCateg = async (categoriaID, PagN) => {
    await api.get(`/produtos/?categoria_id=${categoriaID}&_page=${PagN}&_limit=6`)
    .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    
}

export const getCategorias = async () => {
    await api.get(`/categorias`)
    .then(function (response) {
        return console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    
}


export const testeDois = async () => {
    await api.delete('/categorias/4', {
        id: 5,
        nome:"testando POST"
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
}