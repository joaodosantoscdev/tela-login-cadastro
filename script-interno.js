let userLogged = JSON.parse(localStorage.getItem('userLogged'))

let logged = document.querySelector('#logged');

if(localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar esta página')
  window.location.href = 'http://127.0.0.1:5500/login.html'
}

function sair() {
  localStorage.removeItem('token');
  localStorage.removeItem('userLogged');
  window.location.href = 'http://127.0.0.1:5500/login.html';
}

logged.innerHTML = `Olá ${userLogged.nome}, `;