let botonLogin = document.getElementById('botonLogin');
botonLogin.addEventListener('click',function(){
    let valorUsuario = document.getElementById('usuario').value;
    let valorContraseña = document.getElementById('contraseña').value;
    let irIndex = document.getElementById('irIndex');
    if (valorUsuario === 'felipe' && valorContraseña === '1234'){
        irIndex.href = "../index.html";
    }
    else{
        alert('Usuario o contraseña incorrectos');
    }
});