
export const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

// funcao de file do botao
export function selectFile(e, setFile){
  const file = e.target.files[0];

  
  if(fileSize(file.size)){
    const objectURL = window.URL.createObjectURL(file);
    const thumb = document.querySelector('[data-thumb]');
    thumb.style.display = 'block';
    thumb.style.backgroundImage = `url('${objectURL}')`;
    
    const data = new FormData();
    data.append('file', file);
    setFile(data);
  }else{
    console.log('arquivo muito grande, maximo de 200 kb')
  }
}

// funçao de drop and drag
export function dropHandler(e, setFile) {
  console.log('File(s) dropped');
  
  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  e.preventDefault();
  
  // tipos de img permitidas
  const tiposImg = ['image/jpg', 'image/png', 'image/svg', 'image/jpeg', 'image/webp', 'image/bmp'];

  let file = e.dataTransfer.items[0].getAsFile(); // obj recebido

  if (e.dataTransfer.items) {
  // verificando se o arquivo é permitido
    if(tiposImg.includes(file.type)) {     
      if(fileSize(file.size)) { // verificando o tamanho do arquivo
        const objectURL = window.URL.createObjectURL(file);
        const thumb = document.querySelector('[data-thumb]');
        thumb.style.display = 'block';
        thumb.style.backgroundImage = `url('${objectURL}')`;

        const data = new FormData();
        data.append('file', file);
        setFile(data);
      }else {
        console.log('arquivo muito grande, maximo de 200 kb')
        console.log(file.size)
      }
    }else {
      console.log('arquivo nao permitido')
    }
  }
}
    // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
    
//    else {
//    // Use a interface DataTransfer para acessar o (s) arquivo (s)
//    for (var i = 0; i < e.dataTransfer.files.length; i++) {
//      console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
//    }
//  }

function fileSize(size) { // verificando o tamanho do arquivo
  if(size < 205000) { // 200 kb
    return true;
  }else{ 
    return false
  }
}


export function dragOverHandler(e) {
  console.log('File(s) in drop zone');

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  e.preventDefault();
}


