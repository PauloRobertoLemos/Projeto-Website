const firebaseConfig = {
    apiKey: "AIzaSyC2kUH7z9YnYB7GusSxZrOWFaCeZBGH-Kc",
    authDomain: "projeto-test-f53e9.firebaseapp.com",
    projectId: "projeto-test-f53e9",
    storageBucket: "projeto-test-f53e9.appspot.com",
    messagingSenderId: "55287950434",
    appId: "1:55287950434:web:dbe5cf80a1a8f4c71cf53b"
};

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  //------------------------------------------------------tabela-----------------------------------------------------//









let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let email = document.querySelector('#email')
  let emailLabel = document.querySelector('#emailLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaEmail = []
  
  let emailValid = {
    Email: null,
    senha: null
}
  
listaEmail = JSON.parse(localStorage.getItem('listaemail'))
  
listaEmail?.forEach((item) => {
    if(email.value == item.emailCad && senha.value == item.senhaCad){
       
        emailValid = {
         Email: item.emailCad,
         senha: item.senhaCad
        }
      
    }
})
   
  if(email.value == emailValid.Email && senha.value == emailValid.senha){
    window.location.href = '../../index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('emailLogado', JSON.stringify(emailValid))
  } else {
    emailLabel.setAttribute('style', 'color: red')
    email.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    email.focus()
  }
  
}