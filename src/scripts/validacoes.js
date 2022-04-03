export function valida(input) {
   // const tipoInput = input.dataset.tipo;
   if(input.type != "search"){
       if(input.validity.valid){
           input.style.outline = 'none';
       }else {
           input.style.outline = '1px solid red';
       }
   }
}