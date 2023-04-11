const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');

    
});

function Login_google()
{
  window.open ("https://accounts.google.com/v3/signin/identifier?dsh=S386883798%3A1680179666691073&ifkv=AQMjQ7Rf8toGMzx-XY1GyRT0s9ZdgTz0PcTN5L0QYKKyJMHsGjIOjp-YvhnCCCT5Ty64Zcajy3Z4Cw&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
   

}


function Login_facebook()
{
  window.open ("https://pt-br.facebook.com/login.php");
}

