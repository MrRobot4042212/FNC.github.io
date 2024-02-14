let botonEnviar = document.querySelector('.boton');
let datos = new Array();

botonEnviar.addEventListener('click', function enviarDatos(){
    let usuario = document.getElementById('usuario').value;
    let nick = document.getElementById('nick').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let contraseña = document.getElementById('contraseña').value;
    let ccontraseña = document.getElementById('ccontraseña').value;
    datos.push(usuario,nick,email,telefono,contraseña,ccontraseña);
    console.log(datos);
    recogerDatos();

    function recogerDatos(){
        let botonRecoger = document.querySelector('.botonRecoger');
        let aperturalogin = window.open("Login.html","ventana","width=1920, height=1080, resize=yes")
        let usuarioLogin = document.getElementById('usuarioLogin').value;
        let contraseñaLogin = document.getElementById('contraseñaLogin').value;
        botonRecoger.addEventListener('click', () => {
            if(usuarioLogin === datos[0] && contraseñaLogin === datos[4]){
                aperturalogin.close();
                window.open("usuario.html","ventana","width=1920, height=1080, resize=yes")
            }
            else{

                alert("Usuario o contraseña incorrectos")
            }
        });
    }
});









