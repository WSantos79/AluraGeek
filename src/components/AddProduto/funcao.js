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

// funçao de drop and drag
export function dropHandler(e) {
  console.log('File(s) dropped');

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  e.preventDefault();
  
  // tipos de img permitidas
  const tiposImg = ['image/jpg', 'image/png', 'image/svg', 'image/jpeg', 'image/webp'];

  let file = e.dataTransfer.items[0].getAsFile(); // obj recebido

  if (e.dataTransfer.items) {
  // verificando se o arquivo é permitido
    if(tiposImg.includes(file.type)) {     
      if(file.size < 205000) { // verificando o tamanho do arquivo
        const objectURL = window.URL.createObjectURL(file);
        const thumb = document.querySelector('[data-thumb]');
        thumb.style.display = 'block';
        thumb.style.backgroundImage = `url('${objectURL}')`;        
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


export function dragOverHandler(e) {
  console.log('File(s) in drop zone');

  // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
  e.preventDefault();
}


