const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#id_password1');
togglePassword1.addEventListener('click', function (e) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

function Teste() {
    
    var Teste = document.getElementById('id_password').value;
    var Teste1 = document.getElementById('id_password1').value;


    if (Teste < 8 || (Teste1 <8))
    
    {
     
        alert ("A senha deve conter no minimo 8 caracteres");

    }

    else
    {
        alert ("Sua conta foi cadastrada ");
        window.open("index.html");
            
        
    }

}

