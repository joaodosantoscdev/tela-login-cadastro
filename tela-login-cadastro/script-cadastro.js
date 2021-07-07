let btn = document.querySelector('.fa-eye');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let sobrenome = document.querySelector('#sobrenome');
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false;

let usuario = document.querySelector('#usuario');
let labelUser = document.querySelector('#labelUser');
let validUser = false;

let senha = document.querySelector('#password');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmPassword = document.querySelector('#confirmPassword');
let labelConfirmPassword = document.querySelector('#labelConfirmPassword');
let validConfirmPassword = false;

let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSucess');

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#password');
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
    
  }
});

function cadastrar() {
  if(validNome && validSobrenome && validUser && validSenha && validConfirmPassword) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    
    listaUser.push(
      {
        nomeCad: nome.value,
        sobrenomeCad: sobrenome.value,
        userCad: usuario.value,
        senhaCad: senha.value,
      }
    );
      
      localStorage.setItem('listaUser', JSON.stringify(listaUser));

    msgSucess.setAttribute('style', 'display: block')
    msgSucess.innerHTML = '<strong>Usuário cadastrado com sucesso!</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = '';
    
    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/login.html'
    }, 3000)

  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar.</strong>';
    msgSucess.setAttribute('style', 'display: none')
    msgSucess.innerHTML = '' 
  }
}


nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red');
    labelNome.innerHTML = '<strong>Nome</strong> <small>*Insira no mínimo 3 carácteres.</small>';
    nome.setAttribute('style', 'border-color: red');
    validNome = false;
  } else {
    labelNome.setAttribute('style', 'color: green');
    labelNome.innerHTML = '<strong>Nome</strong>';
    nome.setAttribute('style', 'border-color: green')
    validNome = true;
  }
});

sobrenome.addEventListener('keyup', () => {
  if(sobrenome.value.length <= 3) {
    labelSobrenome.setAttribute('style', 'color: red');
    labelSobrenome.innerHTML = '<strong>Sobrenome</strong> <small>*Insira no mínimo 3 carácteres.</small>';
    sobrenome.setAttribute('style', 'border-color: red');
     validSobrenome = false;
  } else {
    labelSobrenome.setAttribute('style', 'color: green');
    labelSobrenome.innerHTML = '<strong>Sobrenome</strong>';
    sobrenome.setAttribute('style', 'border-color: green');
    validSobrenome = true;
  }
});

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 5) {
    labelUser.setAttribute('style', 'color: red');
    labelUser.innerHTML = '<strong>Usuário</strong> <small>*Insira no mínimo 5 carácteres.</small>';
    usuario.setAttribute('style', 'border-color: red');
    validUser = false;
  } else {
    labelUser.setAttribute('style', 'color: green');
    labelUser.innerHTML = '<strong>Usuário</strong>';
    usuario.setAttribute('style', 'border-color: green');
    validUser = true;
  }
});

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red');
    labelSenha.innerHTML = '<strong>Senha</strong> <small>*Insira no mínimo 6 carácteres.</small>';
    senha.setAttribute('style', 'border-color: red');
    validSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    labelSenha.innerHTML = '<strong>Senha</strong>';
    senha.setAttribute('style', 'border-color: green');
    validSenha = true;
  }
});

confirmPassword.addEventListener('keyup', () => {
  if(senha.value != confirmPassword.value) {
    labelConfirmPassword.setAttribute('style', 'color: red');
    labelConfirmPassword.innerHTML = '<strong>Confirmar Senha</strong> <small>*As senhas não conferem.</small>';
    confirmPassword.setAttribute('style', 'border-color: red');
    validConfirmPassword = false;
  } else {
    labelConfirmPassword.setAttribute('style', 'color: green');
    labelConfirmPassword.innerHTML = '<strong>Confirmar Senha</strong>';
    confirmPassword.setAttribute('style', 'border-color: green');
    validConfirmPassword = true;
  }
});

function initShowPassword() {
  const togglePassword = document.querySelector('#seePassword');
  const password = document.querySelector('#confirmPassword');

  function activePassword(e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  }
  
  togglePassword.addEventListener('click', activePassword);

};

initShowPassword();