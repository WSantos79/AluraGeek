import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-commerce-geek.herokuapp.com'
});

// verificar usuario login
export const getLogin = async(email, senha, setIsLogged) => {
  await api.get(`/users?email=${email}&senha=${senha}`)
  .then(function (response) {
     api.put(`/users/${response.id}`, {
      isLogged: true
    })
      .then(function (response) {
        setIsLogged(true);
      })
      .catch(function (error) {
        alert('usuário não encontrado');  
      });    
  })
  .catch(function (error) {
    alert('usuário não encontrado');  
  });
}

// funçao de busca de produtos por palavra
export const getBusca = async(digitado, setProduto, setIsFound) => {
  await api.get(`/produtos?nome=${digitado}`)
    .then(function (response) {
      if (response.data.length > 0) {
        setProduto(response.data[0]);        
        setIsFound(true); // informando q achou
        console.log('acho')
      } else {
        setIsFound(false);
        
        const notFound = document.querySelector("[data-found]");
        notFound.style.display = 'block';

        setTimeout(function(){
            notFound.style.display = 'none';
        },5000);

      } 
    })
    .catch(function (error) {
      setIsFound(false);
      console.error(error);
      alert('Produto não encontrado!');
    });
}


// pegar produtos para exibir em produtos similares
export const getProdutosSimilares = async (categoriaID, setSimilares, page) => {
  
  await api.get(`/produtos/?categoria_id=${categoriaID}&_page=${page}&_limit=6`)
    .then(function (response) {
      setSimilares(response.data);
      
    })
    .catch(function (error) {
      console.error(error);
    });
}

// pegar os 6 primeiros produtos de cada categoria para exibir na home
export const getProdutosHome = async (setHomeProdutos) => {
  let newArray;
  await api.get(`/produtos/?categoria_id=1&_limit=6`)
    .then(function (response) {
      newArray = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  await api.get(`/produtos/?categoria_id=2&_limit=6`)
    .then(function (response) {
      newArray = [...newArray, ...response.data]
    })
    .catch(function (error) {
      console.error(error);
    });

  await api.get(`/produtos/?categoria_id=3&_limit=6`)
    .then(function (response) {
      newArray = [...newArray, ...response.data]
      setHomeProdutos(newArray)
    })
    .catch(function (error) {
      console.error(error);
    });
}

// pegar as 3 primeiras categorias para mostrar na home
export const getCategorias = async (setAllCategorias) => {
  await api.get(`/categorias?&_limit=3`)
    .then(function (response) {
      setAllCategorias(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}


// pegar todos produtos em ordem por categorias
export const getAllProdudos = async (setAllProdutos) => {
  await api.get(`/produtos/?_sort=categoria_id`)
  .then(function (response) {
    setAllProdutos(response.data)
  })
  .catch(function (error) {
    console.error(error);
  });
}

// mostrar produto ao clicar
export const getShowProduto = async (idProduto, setProduto) => {
  await api.get(`/produtos/${idProduto}`)
    .then(function (response) {
      setProduto(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

// mostrar todos os produto de uma determinada categoria
export const getAllProdCateg = async (id, nome, setCategoria) => {
  await api.get(`/produtos/?categoria_id=${id}`)
    .then(function (response) {
      setCategoria([nome, response.data]);
    })
    .catch(function (error) {
      console.error(error);
    });
}

export const testeDois = async () => {
  await api.post('/categorias', {
    id: 4,
    nome: "testando POST"
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}