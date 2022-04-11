
export function valida() {
    const nomeAlert = document.querySelector('[data-alert-nome]');
    const valorAlert = document.querySelector('[data-alert-valor]');
    const descAlert = document.querySelector('[data-alert-desc]');

    const nome = document.querySelector('[data-nome]');
    const valor = document.querySelector('[data-valor]');
    const valorEdit = valor.value.replace(/\s/g, '').replace('R$', '');    
    const desc = document.querySelector('[data-desc]');
    
    console.log(valorEdit)
    if(!nome.validity.valid){
        nomeAlert.style.display = 'block';
        nome.style.marginBottom = '5px';
    }else{
        nomeAlert.style.display = 'none';
        nome.style.marginBottom = '1rem';
    }

    if(parseInt(valorEdit) < 1){
        valorAlert.style.display = 'block';
        valor.style.marginBottom = '5px';
    }else{
        valorAlert.style.display = 'none';
        valor.style.marginBottom = '1rem';
    }

    if(!desc.validity.valid){
        descAlert.style.display = 'block';
        desc.style.marginBottom = '5px';
    }else{
        descAlert.style.display = 'none';
        desc.style.marginBottom = '0.5rem';
    }
}