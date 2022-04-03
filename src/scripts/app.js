
function valida(input) {
    // const tipoInput = input.dataset.tipo;
    
        if(input.validity.valid) {
            input.style.outline = 'none';
        } else {
            console.log('carailho')
            input.style.outline = '1px solid red';
        }
    
}

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

console.log('carailho')