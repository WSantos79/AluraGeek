export function showSearch() {
    const busca = document.querySelector("[data-busca]")
    busca.style.visibility = `visible`;
    busca.style.opacity = '1';
    busca.style.width = '300px';
    busca.style.padding = '8px 16px';
  
    document.querySelector("[data-cancel]").style.display = `block`;
    document.querySelector("[data-iconBusca]").style.display = `none`;
  
    const login = document.querySelector("[data-login]")
    login.style.visibility = `hidden`;
    login.style.opacity = '0';
    login.style.width = '0px';
    login.style.padding = '0';
    login.style.marginTop = '-200px';
  
    const logo = document.querySelector("[data-logo]")
    logo.style.visibility = `hidden`;
    logo.style.opacity = '0';
    logo.style.width = '0px';
  
    document.querySelector("[data-header]").style.justifyContent = `space-around`;
  }
  
export function disableSearch() {
    const busca = document.querySelector("[data-busca]")
    busca.style.visibility = `hidden`;
    busca.style.opacity = '0';
    busca.style.width = '0px';
    busca.style.padding = '0';
  
    document.querySelector("[data-cancel]").style.display = `none`;
    document.querySelector("[data-iconBusca]").style.display = `block`;
  
  
    const login = document.querySelector("[data-login]")
    login.style.visibility = `visible`;
    login.style.opacity = '1';
    login.style.padding = '12px 47.5px';
    login.style.width = 'initial';
    login.style.marginTop = '0'
  
    const logo = document.querySelector("[data-logo]")
    logo.style.visibility = `visible`;
    logo.style.opacity = '1';
    logo.style.width = '150px';
  
  
    document.querySelector("[data-header]").style.justifyContent = `space-between`;
  }
  