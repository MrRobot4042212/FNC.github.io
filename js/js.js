              
              /* VARIABLES GLOBALES UTILIZADAS PARA DIFERENTES FUNCIONES */


var flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
var flipOverlay = document.querySelectorAll(".overlay")
var frontPeliculas = document.querySelectorAll(".peliculasActive");
var backPeliculas = document.querySelectorAll(".peliculasBackInactive");
var mostrarFiltros = document.querySelectorAll(".cuerpoPDPA");
var botonFiltrar = document.querySelector(".masFiltros");
var botonQuitarFiltros = document.querySelector(".menosFiltros");
var advFilter = document.querySelector(".filtrosAvanzados");
var basicFilter = document.querySelector(".filtrosBasicos");
var botonDesglose = document.querySelectorAll('.botonGeneros');
var listaGeneros = document.querySelector('.listaGeneros');
var pantallaCarga = document.querySelector('.pantallaCargaOf')

let incognita = document.querySelector('.incognita')
const sonidoCorrecto = document.querySelector('.sonidoCorrecto');
const sonidoIncorrecto = document.querySelector('.sonidoIncorrecto');
let botonOmitir= document.querySelector('.omitir');

var goyaAccion = document.querySelector(".goya");
var boton = document.querySelectorAll(".botonZoom");


  /*------------------------------------------------------------------------------------------------------------------- */

                      /* EFECTO FLIP PARA peliculas.html */

flipPeliculas.forEach(function (elemento) {
  elemento.addEventListener('click', function voltear () {
        if (elemento.classList.contains("animacionDefault")) {
            elemento.classList.remove("animacionDefault");
            elemento.classList.add("animacionFlip");
        }
        else if(elemento.classList.contains("animacionFlip")){
          elemento.classList.remove("animacionFlip");
          elemento.classList.add("animacionDefault");
        }
        else{
          elemento.classList.add("animacionDefault");
        }
  });
});

/*   /*------------------------------------------------------------------------------------------------------------------- */



            /*EFECTO DESGLOSE PARA LOS FILTROS DE "GENERO" EN pelis.html*/

botonDesglose.forEach(function (botonDesglose) {
    botonDesglose.addEventListener('click', function () {
      if (listaGeneros.classList.contains('listaGenerosDesglose')) {
        listaGeneros.classList.remove('listaGenerosDesglose');
        listaGeneros.classList.add('listaGenerosEnglosar');
      } else {
        listaGeneros.classList.remove('listaGenerosEnglosar');
        listaGeneros.classList.add('listaGenerosDesglose');
      }
    });
  });

  /*------------------------------------------------------------------------------------------------------------------- */


      /*AÑADIR LA CLASE tituloPelicula, generoPelicula, actorPelicula A LOS HIJOS DE overlayFLip, overlayDefault PARA SU POSTERIOR FILTRADO EN pelis.html */



  let checkOverlayDefault = document.querySelectorAll(".overlayDefault");
  let checkOverlayFlip = document.querySelectorAll(".overlayFlip"); 

  document.addEventListener('DOMContentLoaded', function () {
    checkOverlayDefault.forEach(function (checkOverlay) {
      checkOverlay.children[0].classList.add("tituloPelicula");
    });
    checkOverlayFlip.forEach(function (checkOverlayFlip) {
      checkOverlayFlip.children[0].classList.add("tituloPelicula");
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    checkOverlayFlip.forEach(function (checkOverlayGenero) {
      if (checkOverlayGenero.children.length >= 11) {
        checkOverlayGenero.children[10].classList.add("generoPelicula");
      }
    });
  });
    

    document.addEventListener('DOMContentLoaded', function () {
      checkOverlayFlip.forEach(function (checkOverlayGenero) {
        if (checkOverlayGenero.children.length >= 11) {
          checkOverlayGenero.children[8].classList.add("actorPelicula");
        }
      });
    });

    /*------------------------------------------------------------------------------------------------------------------- */


   

                  /* FILTRADO POR GENERO DE pelis.html */


    let inputFiltroGenero = document.querySelectorAll(".genero");
  
    inputFiltroGenero.forEach(function (inputGen) {
      inputGen.addEventListener('click', function () {
        let inputGenValue = inputGen.innerHTML;
        let flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
        inputGen
        flipPeliculas.forEach(function (filtradoGen) {
          let peliculaGenero = filtradoGen.querySelector(".generoPelicula");
          if (peliculaGenero) {
            peliculaGenero = peliculaGenero.innerHTML;
            let belongsToGenre = peliculaGenero.includes(inputGenValue);
            if (belongsToGenre) {
              filtradoGen.style.display = "block";
            } else {
              filtradoGen.style.display = "none";
            }
          }
        });
      });
    });
  
  /*------------------------------------------------------------------------------------------------------------------- */

  
              /* FILTRADO POR NOMBRE DE PELICULA DE pelis.html */	
  let contenidoTituloPelicula = document.querySelectorAll(".tituloPelicula");
  let inputFiltroPelicula = document.querySelectorAll(".inputNombrePelicula");
  
  inputFiltroPelicula.forEach(function (inputF) {
    inputF.addEventListener('keydown', function () {
      let inputValue = inputF.value.toLowerCase();
      if (inputValue === ""){
        contenidoTituloPelicula.forEach(function (filtrado) {
          filtrado.style.display = "block";
        });
      }
      let flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
      flipPeliculas.forEach(function (filtrado) {
        let peliculaTitulo = filtrado.querySelector(".tituloPelicula").innerHTML.toLowerCase();
  
        if (peliculaTitulo.includes(inputValue)) {
          filtrado.style.display = "block";
        } else {
          filtrado.style.display = "none";
        }
      });
    });
  });

  /*------------------------------------------------------------------------------------------------------------------- */

                      /*FILTRADO POR NOMBRE DE ACTOR EN pelis.html */

  let inputActorPelicula = document.querySelectorAll(".inputActorPelicula");
  let contenidoActorPelicula = document.querySelectorAll(".actorPelicula");

  inputActorPelicula.forEach(function (inputActor) {
    inputActor.addEventListener('keydown', function () {
      let inputValue = inputActor.value.toLowerCase();
      if (inputValue === ""){
        contenidoActorPelicula.forEach(function (filtrado) {
          filtrado.style.display = "block";
        });
      }
      let flipPeliculas = document.querySelectorAll(".contenedorPeliculas");
      flipPeliculas.forEach(function (filtrado) {
        let peliculaActor = filtrado.querySelector(".actorPelicula").innerHTML.toLowerCase();
        console.log(peliculaActor);
        if (peliculaActor.includes(inputValue)) {
          filtrado.style.display = "block";
        }
        else if (inputValue === ""){
        filtrado.style.display = "block";
        }
        else {
          filtrado.style.display = "none";
        }
      });
    });
  });

  /*------------------------------------------------------------------------------------------------------------------- */

      /*AÑADIR LA CLASE nombreDirector A LOS HIJOS DE informacionDirector PARA SU POSTERIOR FILTRADO EN directores.html */

  document.addEventListener('DOMContentLoaded', function () {
    let contenedorDirectores = document.querySelectorAll('.informacionDirector');
        contenedorDirectores.forEach(function (directorclase) {
      directorclase.children[0].classList.add('nombreDirector');       
    });
  });

  /*------------------------------------------------------------------------------------------------------------------- */


                /*FILTRADO POR NOMBRE DE DIRECTOR EN directores.html */


  let contenidoTituloDirector = document.querySelectorAll('.nombreDirector')
  let inputFiltroDirector = document.querySelectorAll(".inputDirector");

  inputFiltroDirector.forEach(function (inputD) {
    inputD.addEventListener('keydown', function () {
      let inputValueDirector = inputD.value.toLowerCase();
      if (inputValueDirector === ""){
        contenidoTituloDirector.forEach(function (filtradoD) {
          filtradoD.style.display = "block";
        });
      }
      let contenedorDirectores = document.querySelectorAll(".contenedorDirectores");
      contenedorDirectores.forEach(function (filtrar) {
        let directorTitulo = filtrar.querySelector(".nombreDirector").innerHTML.toLowerCase();
        if (directorTitulo.includes(inputValueDirector)) {
          filtrar.style.display = "block";
        }
        else if (inputValueDirector === ""){
          filtrar.style.display = "block";
        }
        else {
          filtrar.style.display = "none";
        }
      });
    });
  });

  /*------------------------------------------------------------------------------------------------------------------- */


      /*AÑADIR LA CLASE nombreProductor A LOS HIJOS DE informacionProductor PARA SU POSTERIOR FILTRADO EN Productores.html */


  document.addEventListener('DOMContentLoaded', function () {
    let contenedorProductor = document.querySelectorAll('.informacionProductor');
        contenedorProductor.forEach(function (productorClase) {
      productorClase.children[0].classList.add('nombreProductor');       
    });
  });

  /*------------------------------------------------------------------------------------------------------------------- */

                   
                      /* FILTRADO POR NOMRE DE PRODUCTOR EN productores.html */


  let contenidoTituloProductor = document.querySelectorAll('.nombreProductor')
  let inputFiltroProductor = document.querySelectorAll(".inputProductor");

  inputFiltroProductor.forEach(function (inputPr) {
    inputPr.addEventListener('keydown', function () {
      let inputValueProductor = inputPr.value.toLowerCase();
      if (inputValueProductor === ""){
        contenidoTituloProductor.forEach(function (filtradoPr) {
          filtradoPr.style.display = "block";
        });
      }
      let contenedorProductor = document.querySelectorAll(".contenedorProductores");
      contenedorProductor.forEach(function (filtrarPr) {
        let productorTitulo = filtrarPr.querySelector(".nombreProductor").innerHTML.toLowerCase();
        if (productorTitulo.includes(inputValueProductor)) {
          filtrarPr.style.display = "block";
        } 
        else if (inputValueProductor === ""){
          filtrarPr.style.display = "block";
          }
        
        else {
          filtrarPr.style.display = "none";
        }
      });
    });
  });

/*------------------------------------------------------------------------------------------------------------------- */



/*AÑADIR LA CLASE nombreActor A LOS HIJOS DE informacionActor PARA SU POSTERIOR FILTRADO EN actores.html */


  document.addEventListener('DOMContentLoaded', function () {
    let contenedorActor = document.querySelectorAll('.informacionActor');
        contenedorActor.forEach(function (actorClase) {
      actorClase.children[0].classList.add('nombreActor');       
    });
  });

/*------------------------------------------------------------------------------------------------------------------- */



                    /* FILTRADO POR NOMBRE DE ACTOR EN actores.html */


  let contenidoTituloActor = document.querySelectorAll('.nombreActor')
  let inputFiltroActor = document.querySelectorAll(".inputActor");

  inputFiltroActor.forEach(function (inputAc) {
    inputAc.addEventListener('keydown', function () {
      let inputValueActor = inputAc.value.toLowerCase();
      if (inputValueActor === ""){
        contenidoTituloActor.forEach(function (filtradoAc) {
          filtradoAc.style.display = "block";
        });
      }
      let contenedorActor = document.querySelectorAll(".contenedorActor");
      contenedorActor.forEach(function (filtrarAc) {
        let actorTitulo = filtrarAc.querySelector(".nombreActor").innerHTML.toLowerCase();
        if (actorTitulo.includes(inputValueActor)) {
          filtrarAc.style.display = "block";
        } 
        else if (inputValueActor === ""){
          filtrarAc.style.display = "block";
          }
        else {
          filtrarAc.style.display = "none";
        }
      });
    });
  });

/*-------------------------------------------------------------------------------------------------------------------*/

  
      /*FUNCION QUE NOS PERMITE CAMBIAR EL ESTILO DEL GRID, PARA AÑADIR MAS OPCIONES DE FILTRADO */


mostrarFiltros.forEach(function (showFilter) {
  botonFiltrar.addEventListener('click', function () {
      if(showFilter.style.gridTemplateColumns = "4fr"){
          showFilter.style.gridTemplateColumns = "1fr 4fr";
          showFilter.style.alignItems = "start";
          basicFilter.classList.add("filtrosBasicosRemove");
          advFilter.classList.remove("filtrosAvanzadosRemove");


          botonFiltrar.style.display="none";
          botonQuitarFiltros.style.display="block";

          botonQuitarFiltros.addEventListener('click', function () {
            showFilter.style.gridTemplateColumns = "4fr";
            botonFiltrar.style.display="block";
            botonQuitarFiltros.style.display="none";
            basicFilter.classList.remove("filtrosBasicosRemove");
            advFilter.classList.add("filtrosAvanzadosRemove");
          });
      }
      else if(showFilter.style.gridTemplateColumns = "1fr 4fr"){
          showFilter.style.gridTemplateColumns = "4fr";
      }
  });
});

/*-------------------------------------------------------------------------------------------------------------------*/


/* ANIMACIONES DE ZOOM PARA premios.html Y AÑADIR UN SONIDO DE TRANSICIÓN */

document.addEventListener("DOMContentLoaded", function () {
  var elegirPremio = document.querySelector('.elegirPremio');
  elegirPremio.addEventListener('click', function (event) {
    var clickedElement = event.target.closest('.fondo');
    if (clickedElement) {
      let fondoPremios = document.querySelector('.background');
      const aplausosPlay = document.querySelector('.aplausos');

      if (clickedElement.classList.contains("fondo")) {
        clickedElement.classList.remove("fondo");
        clickedElement.classList.add("fondoActivado");
        elegirPremio.classList.add("fondoActivado");
        fondoPremios.classList.add("zoomFondo");
        aplausosPlay.play();

/*-------------------------------------------------------------------------------------------------------------------*/



    /*AGREGAR UN TIMEOUT UNA VEZ ELEGIDA LA "ELECCION" NOS MUESTRE EN EL TIPO DE PREMIO QUE ESTAMOS */


        setTimeout(function () {
          fondoPremios.classList.add("zoomFondoDesaparecer");
          let eleccion = clickedElement.querySelector('.tituloPremio').innerHTML;
          let contenidoPremios = document.querySelector('.contenedorPremio');
          console.log(eleccion);

/*-------------------------------------------------------------------------------------------------------------------*/

          switch (eleccion) {

                                /* ELECCION DE LOS PREMIOS GOYA */

            case 'Premios Goya':

              const parrafo0 = document.querySelector('.traduccion0');
              var contenedorTraduccion0 = document.querySelector('.contenedorTraduccion0');
              var nuevoTextoCompleto0 = "";

              botonOmitir=document.querySelector('.contenedorTraduccion0 .omitir');
              setTimeout(function() {
                index0 = 0;
                escribirTexto0(nuevoTextoCompleto0);
            }, 30);

            botonOmitir.style.display="none";
            setTimeout( function () {
              botonOmitir.style.display="block";
            },1000)

                        /* EL TEXTO SE ESCRIBE A MEDIDA DEL COMENTARISTA */


            function escribirTexto0() {
              nuevoTextoCompleto0=`Ladies and gentlemen, welcome to the most glamorous
               and distinguished night of Spanish cinema: The Goya Awards! We are gathered
                here to pay tribute to cinematic excellence, celebrate creativity, and 
                applaud the talented artists who have brought to life stories that have 
                moved and captivated us. Get ready for an evening filled with excitement,
                elegance, and well-deserved recognition for the best of our seventh art! 
                Let the Goya Awards ceremony begin!`;
              
              parrafo0.innerHTML += nuevoTextoCompleto0.charAt(index0);
              index0++;
              
              if (index0 < nuevoTextoCompleto0.length) {
                  const delaytexto = setTimeout(function() {
                      escribirTexto0(nuevoTextoCompleto0);
                  }, 47);

                               /*BOTON DE OMITIR EL TEXTO Y COMENTARISTA */

                  botonOmitir.addEventListener("click",function(){
                    comentaristaGoya.remove();
                    contenedorTraduccion0.style.display="none";
                    botonOmitir.style.display="none";
                    pantallaCarga.classList.remove('pantallaCargaOf')
                    pantallaCarga.classList.add('pantallaCargaOn')
                    const omitirTexto = setTimeout(function() {
                      escribirTexto0(nuevoTextoCompleto0)
                    },1);
                  });
                }
              else{
                                    /*EMPIECE DEL MINIJUEGO DE LOS GOYA */

                  setTimeout(() => {
                    pantallaCarga.classList.remove('pantallaCargaOn')
                    pantallaCarga.classList.add('pantallaCargaOf')
                    let musicaAmbiental = document.querySelector('.sonidoAmbiente');
                    let sliderPremiosGoya = document.querySelector('.contenedorGoya .sliderPremiosOf');
                    let opcionesGoya = document.querySelector('.contenedorGoya .opcionesOf');

                    if (sliderPremiosGoya.classList.contains('sliderPremiosOf')) {
                      sliderPremiosGoya.classList.remove('sliderPremiosOf');
                      sliderPremiosGoya.classList.add('sliderPremiosOn');
                      opcionesGoya.classList.remove('opcionesOf');
                      opcionesGoya.classList.add('opcionesOn');
                    }
                    else{
                      sliderPremiosGoya.classList.remove('sliderPremiosOn');
                      sliderPremiosGoya.classList.add('sliderPremiosOf');
                      opcionesGoya.classList.remove('opcionesOn');
                      opcionesGoya.classList.add('opcionesOf');
                    }
                    musicaAmbiental.play();
                    contenedorTraduccion0.style.display='none';
                    comentaristaGoya.remove();
                    var contadorBueno = 0;
                    var contadorMalo = 0;
                    let peliculasGoya = document.getElementsByClassName('opcionPeliculaGoya');
                    let peliculaSeleccionadaGoya = '';
                    let revelacionImagenGoya = document.getElementById('revelacionMejorPeliculaGoya');
                    let cambioMejorPeliculaGoya = document.getElementById('tituloMejorPeliculaGoya');

                                            /* PREGUNTA 1 GOYA*/


                    Array.from(peliculasGoya).forEach(peliculaGoya => {
                        peliculaGoya.addEventListener('click', function seleccionMejorPeliculaGoya() {
                            peliculaSeleccionadaGoya = this.innerText;
                            if (peliculaSeleccionadaGoya === 'As Bestas') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorPeliculaGoya.textContent = 'As Bestas';
                              },2000)
                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorPeliculaGoya.textContent = 'As Bestas';

                              },2000)
                            }
                            console.log(peliculaSeleccionadaGoya);
                            
                            setTimeout(function(){
                              opcionesGoya.classList.remove('opcionesOf')
                              opcionesGoya.classList.add('opcionesOn')
                              revelacionImagenGoya.style.opacity = '0';
                              let mejorPeliculaGoya = document.getElementById('mejorPeliculaGoya');
                              mejorPeliculaGoya.style.display = 'none';
                              seleccionMejorActorGoya();
                            },4000)
                        });
                    });

                    
                                            /* PREGUNTA 2 GOYA*/



                    function seleccionMejorActorGoya() {
                      let incognita = document.querySelector('.mejorActorGoya .incognita');
                      let opcionesGoya = document.querySelector('.contenedorGoya .opcionesOf');
                      if (opcionesGoya.classList.contains('opcionesOf')) {
                        opcionesGoya.classList.remove('opcionesOf');
                        opcionesGoya.classList.add('opcionesOn');
                      }
                      else{
                        opcionesGoya.classList.remove('opcionesOn');
                        opcionesGoya.classList.add('opcionesOf');
                      }
                      let mejorActorGoya = document.getElementById('mejorActorGoya');
                      mejorActorGoya.style.display = 'grid';
                      let revelacionImagenGoya = document.getElementById('revelacionMejorActorGoya');
                      let actoresGoya = document.getElementsByClassName('opcionActorGoya');
                      let actorSeleccionadoGoya = '';
                      let cambioMejorActorGoya = document.getElementById('tituloMejorActorGoya')

                      Array.from(actoresGoya).forEach(actorGoya => {
                        actorGoya.addEventListener('click', function() {
                            actorSeleccionadoGoya = this.innerText;

                            if (actorSeleccionadoGoya === 'Denis Menochet') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function() {
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorActorGoya.textContent = 'Denis Menochet';
                              },2000)

                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorActorGoya.textContent = 'Denis Menochet';
                              },2000)
                            }
                            console.log(actorSeleccionadoGoya);
                            setTimeout(function(){
                              opcionesGoya.classList.remove('opcionesOf')
                              opcionesGoya.classList.add('opcionesOn')
                              revelacionImagenGoya.style.opacity = '0';
                              mejorActorGoya.style.display = 'none';
                              seleccionMejorActrizGoya();
                            },4000)
                        });
                    });

                    
                                            /* PREGUNTA 3 GOYA*/


                    function seleccionMejorActrizGoya() {
                      let incognita = document.querySelector('.mejorActrizGoya .incognita');
                      let opcionesGoya = document.querySelector('.contenedorGoya .opcionesOf');
                      if (opcionesGoya.classList.contains('opcionesOf')) {
                        opcionesGoya.classList.remove('opcionesOf');
                        opcionesGoya.classList.add('opcionesOn');
                      }
                      else{
                        opcionesGoya.classList.remove('opcionesOn');
                        opcionesGoya.classList.add('opcionesOf');
                      }

                      let mejorActrizGoya = document.getElementById('mejorActrizGoya');
                      mejorActrizGoya.style.display = 'grid';
                      let revelacionImagenGoya = document.getElementById('revelacionMejorActrizGoya');
                      let actricesGoya = document.getElementsByClassName('opcionActrizGoya');
                      let actricesSeleccionadoGoya = '';
                      let cambioMejorActrizGoya = document.getElementById('tituloMejorActrizGoya')

                      Array.from(actricesGoya).forEach(actrizGoya => {
                        actrizGoya.addEventListener('click', function() {
                            actricesSeleccionadoGoya = this.innerText;

                            if (actricesSeleccionadoGoya === 'Laia Costa') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function() {
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorActrizGoya.textContent = 'Laia Costa';
                              },2000)

                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorActrizGoya.textContent = 'Laia Costa';
                              },2000)
                            }
                            console.log(actricesSeleccionadoGoya);
                            setTimeout(function(){
                              opcionesGoya.classList.remove('opcionesOf')
                              opcionesGoya.classList.add('opcionesOn')
                              revelacionImagenGoya.style.opacity = '0';
                              mejorActrizGoya.style.display = 'none';
                              seleccionMejorDirectorGoya();
                            },4000)
                        });
                    });
                    };

                                            /* PREGUNTA 4 GOYA*/



                    function seleccionMejorDirectorGoya() {
                      let incognita = document.querySelector('.mejorDirectorGoya .incognita');
                      let opcionesGoya = document.querySelector('.contenedorGoya .opcionesOf');
                      if (opcionesGoya.classList.contains('opcionesOf')) {
                        opcionesGoya.classList.remove('opcionesOf');
                        opcionesGoya.classList.add('opcionesOn');
                      }
                      else{
                        opcionesGoya.classList.remove('opcionesOn');
                        opcionesGoya.classList.add('opcionesOf');
                      }
                      let mejorDirectorGoya = document.getElementById('mejorDirectorGoya');
                      mejorDirectorGoya.style.display = 'grid';
                      let revelacionImagenGoya = document.getElementById('revelacionMejorDirectorGoya');
                      let directoresGoya = document.getElementsByClassName('opcionDirectorGoya');
                      let directoresSeleccionadoGoya = '';
                      let cambioMejorDirectorGoya = document.getElementById('tituloMejorDirectorGoya')

                      Array.from(directoresGoya).forEach(directorGoya => {
                        directorGoya.addEventListener('click', function() {
                            directoresSeleccionadoGoya = this.innerText;

                            if (directoresSeleccionadoGoya === 'Rodrigo Sorogoyen') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function() {
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorDirectorGoya.textContent = 'Rodrigo Sorogoyen';
                              },2000)

                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGoya.classList.remove('opcionesOn')
                              opcionesGoya.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGoya.style.opacity = '1';
                                cambioMejorDirectorGoya.textContent = 'Rodrigo Sorogoyen';
                              },2000)
                            }
                            console.log(directoresSeleccionadoGoya);
                            setTimeout(function(){
                              opcionesGoya.classList.remove('opcionesOf')
                              opcionesGoya.classList.add('opcionesOn')
                              revelacionImagenGoya.style.opacity = '0';
                              mejorDirectorGoya.style.display = 'none';
                              resultadosGoya();
                            },4000)
                        });
                    });
                    };

                                        /* RESULTADOS DE LOS GOYA */

                    function resultadosGoya(){
                      fondoPremios.src = "";
                      musicaAmbiental.remove();
                      const luces = document.querySelector('.luces')
                      luces.play();
                      setTimeout(function(){
                        musicaAmbiental.play();
                        var contenidoResultadoGoya = document.querySelector(".goya .resultados");
                        var tituloPorPuntosGoya = document.querySelector(" .goya .resultados .tituloDePuntuacion");
                        contenidoResultadoGoya.style.display = 'grid';
                        var totalContadorGoya = contadorBueno + contadorMalo;
                        var puntuacionGoya = document.querySelector('.puntuacion')
                        puntuacionGoya.textContent = contadorBueno + "/" + totalContadorGoya;
                        fondoPremios.src = "../img/premios/resultados.png"
                        switch (true) {
                          case (contadorBueno ===0):
                            tituloPorPuntosGoya.textContent = "El cineasta por postureo";
                            break;
                          case (contadorBueno <=2):
                            tipoPremioGoya.textContent = "Buen cineasta pero intentalo un poco mejor";
                            break;
                          case (contadorBueno <=4):
                            tituloPorPuntosGoya.textContent = "El cineasta estrella";
                            break;
                          default:
                            tituloPorPuntosGoya.textContent = "ERROR";
                            break;
                        }
                      },1000)
                    }     
                  }

                }, 2000);
                index0 = 0;
              }
            }
              const comentaristaGoya= document.querySelector('.comentaristaGoya');
              let contenedorGoya = document.querySelector('.contenedorGoya');
              contenedorGoya.style.display = 'grid';
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioGoya.jpeg";
              comentaristaGoya.play();

              break;


/*-------------------------------------------------------------------------------------------------------------------*/


            case 'Premios Oscar':

                                    /* ELECCION DE LOS PREMIOS OSCARS */

              const parrafo = document.querySelector('.traduccion');
              var contenedorTraduccion = document.querySelector('.contenedorTraduccion');
              var nuevoTextoCompleto = "";

              botonOmitir=document.querySelector('.contenedorTraduccion .omitir');
              pantallaCarga = document.querySelector('.contenedorOscars .pantallaCargaOf');
              botonOmitir.style.display="none";
                setTimeout( function () {
                  botonOmitir.style.display="block";
                },1000)
              setTimeout(function() {
                index = 0;
                escribirTexto(nuevoTextoCompleto);
            }, 30);

            function escribirTexto() {
              nuevoTextoCompleto=`Damas y caballeros, bienvenidos al escenario más grandioso del mundo del cine: ¡Los Oscar!
              Esta noche nos reunimos para rendir homenaje a la cima del séptimo arte, para celebrar el
              poder de la narración y aplaudir los talentos extraordinarios que han iluminado nuestras 
             pantallas. Desde deslumbrantes interpretaciones hasta realizaciones cinematográficas visionarias, 
             estamos aquí para reconocer la brillantez que ha dejado una marca indeleble en el paisaje cinematográfico global.
             Prepárense para una noche de glamour inigualable, donde los sueños no solo se realizan,
              sino que también son premiados. Mientras nos embarcamos en este viaje cinematográfico, permitamos que la magia de la pantalla plateada nos una a todos. 
             Brindemos por los Oscar, donde la excelencia no solo se reconoce, sino que también se inmortaliza. Luces, cámara, ¡acción! ¡Que comiencen los Oscar! `;
             
             parrafo.innerHTML += nuevoTextoCompleto.charAt(index);
              index++;
              if (index < nuevoTextoCompleto.length) {
                  setTimeout(function() {
                      escribirTexto(nuevoTextoCompleto);
                  }, 47);

                  botonOmitir.addEventListener("click",function(){
                    comentaristaOscar.remove();
                    contenedorTraduccion.style.display="none";
                    botonOmitir.style.display="none";
                    pantallaCarga.classList.remove('pantallaCargaOf')
                    pantallaCarga.classList.add('pantallaCargaOn')
                    const omitirTexto = setTimeout(function() {
                      escribirTexto(nuevoTextoCompleto)
                    },1);
                  });
                }

              else{

                                    /*EMPIECE DEL MINIJUEGO DE LOS OSCARS */


                setTimeout(() => {
                  pantallaCarga.classList.remove('pantallaCargaOn')
                  pantallaCarga.classList.add('pantallaCargaOf')

                  let musicaAmbiental = document.querySelector('.sonidoAmbiente');
                  let sliderPremiosOscars = document.querySelector('.contenedorOscars .sliderPremiosOf');
                  let opcionesOscars = document.querySelector('.contenedorOscars .opcionesOf');

                  if (sliderPremiosOscars.classList.contains('sliderPremiosOf')) {
                    sliderPremiosOscars.classList.remove('sliderPremiosOf');
                    sliderPremiosOscars.classList.add('sliderPremiosOn');
                    opcionesOscars.classList.remove('opcionesOf');
                    opcionesOscars.classList.add('opcionesOn');
                  }
                  else{
                    sliderPremiosOscars.classList.remove('sliderPremiosOn');
                    sliderPremiosOscars.classList.add('sliderPremiosOf');
                    opcionesOscars.classList.remove('opcionesOn');
                    opcionesOscars.classList.add('opcionesOf');
                  }
                  
                  musicaAmbiental.play();
                  contenedorTraduccion.style.display='none';
                  comentaristaOscar.remove();
                  var contadorBueno = 0;
                  var contadorMalo = 0;
                  let peliculasOscars = document.getElementsByClassName('opcionPeliculaOscars');
                  let peliculaSeleccionadaOscars = '';
                  let revelacionImagenOscars = document.getElementById('revelacionMejorPeliculaOscars');
                  let cambioMejorPeliculaOscars = document.getElementById('tituloMejorPeliculaOscars')
                  incognita = document.querySelector('.mejorPeliculaOscars .incognita')


                                            /* PREGUNTA 1 OSCARS*/


                  Array.from(peliculasOscars).forEach(peliculaOscars => {
                      peliculaOscars.addEventListener('click', function seleccionMejorPeliculaOscars() {
                          peliculaSeleccionadaOscars = this.innerText;
                          if (peliculaSeleccionadaOscars === 'Todo a la vez en todas partes') {
                            contadorBueno++
                            incognita.src = "../img/premios/correcto.png"
                            sonidoCorrecto.play(); 
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function(){
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorPeliculaOscars.textContent = 'Todo a la vez en todas partes';
                            },2000)
                          }
                          else{
                            contadorMalo++
                            incognita.src = "../img/premios/incorrecto.png"
                            sonidoIncorrecto.play();
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function(){
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorPeliculaOscars.textContent = 'Todo a la vez en todas partes';

                            },2000)
                          }
                          console.log(peliculaSeleccionadaOscars);
                          
                          setTimeout(function(){
                            opcionesOscars.classList.remove('opcionesOf')
                            opcionesOscars.classList.add('opcionesOn')
                            revelacionImagenOscars.style.opacity = '0';
                            let mejorPeliculaOscars = document.getElementById('mejorPeliculaOscars');
                            mejorPeliculaOscars.style.display = 'none';
                            seleccionMejorActorOscars();
                          },4000)
                      });
                  });

                                          /* PREGUNTA 2 OSCARS*/


                  function seleccionMejorActorOscars() {
                    let incognita = document.querySelector('.mejorActorOscars .incognita');
                    let opcionesOscars = document.querySelector('.contenedorOscars .opcionesOf');
                    if (opcionesOscars.classList.contains('opcionesOf')) {
                      opcionesOscars.classList.remove('opcionesOf');
                      opcionesOscars.classList.add('opcionesOn');
                    }
                    else{
                      opcionesOscars.classList.remove('opcionesOn');
                      opcionesOscars.classList.add('opcionesOf');
                    }
                    let mejorActorOscars = document.getElementById('mejorActorOscars');
                    mejorActorOscars.style.display = 'grid';
                    let revelacionImagenOscars = document.getElementById('revelacionMejorActorOscars');
                    let actoresOscars = document.getElementsByClassName('opcionActorOscars');
                    let actorSeleccionadoOscars = '';
                    let cambioMejorActorOscars = document.getElementById('tituloMejorActorOscars')

                    Array.from(actoresOscars).forEach(actorOscars => {
                      actorOscars.addEventListener('click', function() {
                          actorSeleccionadoOscars = this.innerText;

                          if (actorSeleccionadoOscars === 'Brendan Fraser') {
                            contadorBueno++
                            incognita.src = "../img/premios/correcto.png"
                            sonidoCorrecto.play();
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function() {
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorActorOscars.textContent = 'Brendan Fraser';
                            },2000)

                          }
                          else{
                            contadorMalo++
                            incognita.src = "../img/premios/incorrecto.png"
                            sonidoIncorrecto.play();
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function(){
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorActorOscars.textContent = 'Brendan Fraser';
                            },2000)
                          }
                          console.log(actorSeleccionadoOscars);
                          setTimeout(function(){
                            opcionesOscars.classList.remove('opcionesOf')
                            opcionesOscars.classList.add('opcionesOn')
                            revelacionImagenOscars.style.opacity = '0';
                            mejorActorOscars.style.display = 'none';
                            seleccionMejorActrizOscars();
                          },4000)
                      });
                  });

                                          /* PREGUNTA 3 OSCARS*/


                  function seleccionMejorActrizOscars() {
                    let incognita = document.querySelector('.mejorActrizOscars .incognita');
                    let opcionesOscars = document.querySelector('.contenedorOscars .opcionesOf');
                    if (opcionesOscars.classList.contains('opcionesOf')) {
                      opcionesOscars.classList.remove('opcionesOf');
                      opcionesOscars.classList.add('opcionesOn');
                    }
                    else{
                      opcionesOscars.classList.remove('opcionesOn');
                      opcionesOscars.classList.add('opcionesOf');
                    }
                    let mejorActrizOscars = document.getElementById('mejorActrizOscars');
                    mejorActrizOscars.style.display = 'grid';
                    let revelacionImagenOscars = document.getElementById('revelacionMejorActrizOscars');
                    let actricesOscars = document.getElementsByClassName('opcionActrizOscars');
                    let actricesSeleccionadoOscars = '';
                    let cambioMejorActrizOscars = document.getElementById('tituloMejorActrizOscars')

                    Array.from(actricesOscars).forEach(actrizOscars => {
                      actrizOscars.addEventListener('click', function() {
                          actricesSeleccionadoOscars = this.innerText;

                          if (actricesSeleccionadoOscars === 'Michelle Yeoh') {
                            contadorBueno++
                            incognita.src = "../img/premios/correcto.png"
                            sonidoCorrecto.play();
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function() {
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorActrizOscars.textContent = 'Michelle Yeoh';
                            },2000)

                          }
                          else{
                            contadorMalo++
                            incognita.src = "../img/premios/incorrecto.png"
                            sonidoIncorrecto.play();
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function(){
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorActrizOscars.textContent = 'Michelle Yeoh';
                            },2000)
                          }
                          console.log(actricesSeleccionadoOscars);
                          setTimeout(function(){
                            opcionesOscars.classList.remove('opcionesOf')
                            opcionesOscars.classList.add('opcionesOn')
                            revelacionImagenOscars.style.opacity = '0';
                            mejorActrizOscars.style.display = 'none';
                            seleccionMejorDirectorOscars();
                          },4000)
                      });
                   });
                  };

                                          /* PREGUNTA 4 OSCARS*/


                  function seleccionMejorDirectorOscars() {
                    let incognita = document.querySelector('.mejorDirectorOscars .incognita');
                    let opcionesOscars = document.querySelector('.contenedorOscars .opcionesOf');
                    if (opcionesOscars.classList.contains('opcionesOf')) {
                      opcionesOscars.classList.remove('opcionesOf');
                      opcionesOscars.classList.add('opcionesOn');
                    }
                    else{
                      opcionesOscars.classList.remove('opcionesOn');
                      opcionesOscars.classList.add('opcionesOf');
                    }
                    let mejorDirectorOscars = document.getElementById('mejorDirectorOscars');
                    mejorDirectorOscars.style.display = 'grid';
                    let revelacionImagenOscars = document.getElementById('revelacionMejorDirectorOscars');
                    let directoresOscars = document.getElementsByClassName('opcionDirectorOscars');
                    let directoresSeleccionadoOscars = '';
                    let cambioMejorDirectorOscars = document.getElementById('tituloMejorDirectorOscars')

                    Array.from(directoresOscars).forEach(directorOscars => {
                      directorOscars.addEventListener('click', function() {
                          directoresSeleccionadoOscars = this.innerText;

                          if (directoresSeleccionadoOscars === 'Daniel Kwan y Daniel Scheinert') {
                            contadorBueno++
                            incognita.src = "../img/premios/correcto.png"
                            sonidoCorrecto.play();
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function() {
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorDirectorOscars.textContent = 'Daniel Kwan y Daniel Scheinert';
                            },2000)

                          }
                          else{
                            contadorMalo++
                            incognita.src = "../img/premios/incorrecto.png"
                            sonidoIncorrecto.play();
                            opcionesOscars.classList.remove('opcionesOn')
                            opcionesOscars.classList.add('opcionesOf')
                            setTimeout(function(){
                              incognita.style.opacity = '0';
                              revelacionImagenOscars.style.opacity = '1';
                              cambioMejorDirectorOscars.textContent = 'Daniel Kwan y Daniel Scheinert';
                            },2000)
                          }
                          console.log(directoresSeleccionadoOscars);
                          setTimeout(function(){
                            opcionesOscars.classList.remove('opcionesOf')
                            opcionesOscars.classList.add('opcionesOn')
                            revelacionImagenOscars.style.opacity = '0';
                            mejorDirectorOscars.style.display = 'none';
                            resultadosOscars();
                          },4000)
                      });
                   });
                  };

                                          /* RESULTADOS OSCARS*/


                  function resultadosOscars(){
                    fondoPremios.src = "";
                    musicaAmbiental.remove();
                    const luces = document.querySelector('.luces')
                    luces.play();
                    setTimeout(function(){
                      musicaAmbiental.play();
                      var contenidoResultadoOscars = document.querySelector(".oscars .resultados");
                      var tituloPorPuntosOscars = document.querySelector(".oscars .resultados .tituloDePuntuacion");
                      contenidoResultadoOscars.style.display = 'grid';
                      var totalContadorOscars = contadorBueno + contadorMalo;
                      var puntuacionOscars = document.querySelector('.oscars .puntuacion')
                      puntuacionOscars.textContent = contadorBueno + "/" + totalContadorOscars;
                      fondoPremios.src = "../img/premios/resultados.png"
                      switch (true) {
                        case (contadorBueno ===0):
                          tituloPorPuntosOscars.textContent = "El cineasta por postureo";
                          break;
                        case (contadorBueno <=2):
                          tipoPremioOscars.textContent = "Buen cineasta pero intentalo un poco mejor";
                          break;
                        case (contadorBueno <=4):
                          tituloPorPuntosOscars.textContent = "El cineasta estrella";
                          break;
                        default:
                          tituloPorPuntosOscars.textContent = "ERROR";
                          break;
                      }
                    },1000);
                  }

            

                    
                }

                }, 2000);
                index = 0;
              }

            }
            
              const comentaristaOscar= document.querySelector('.comentaristaOscars');
              let contenedorOscars = document.querySelector('.contenedorOscars');
              contenedorOscars.style.display = 'grid';
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioOscars.jpeg";
              comentaristaOscar.play();

            break;

            case 'Premios Globos de oro':

                                  /* ELECCION DE LOS PREMIOS GLOBOS DE ORO */

              
               const parrafo2 = document.querySelector('.traduccionGlobos');
              var contenedorTraduccion2 = document.querySelector('.contenedorTraduccion2');
              var nuevoTextoCompleto2 = "";

              setTimeout(function() {
                index2 = 0;
                escribirTexto2(nuevoTextoCompleto2);
            }, 30);

            botonOmitir=document.querySelector('.contenedorTraduccion2 .omitir');
            pantallaCarga = document.querySelector('.contenedorGlobos .pantallaCargaOf');
            botonOmitir.style.display="none";
              setTimeout( function () {
                botonOmitir.style.display="block";
              },1000)

            function escribirTexto2() {

              nuevoTextoCompleto2=`Damas y caballeros, bienvenidos a una noche de glamour y reconocimiento extraordinario:
              ¡Los Globos de Oro! Nos reunimos para celebrar la excelencia en el cine y la televisión,
              donde las estrellas brillan con intensidad y las historias más cautivadoras son honradas.
             Prepárense para un festín de talento y creatividad, donde la distinción se encuentra con 
             la diversidad, y cada nominado nos recuerda la riqueza de la industria del entretenimiento.
              Sin más preámbulos, ¡comencemos esta mágica travesía de los Globos de Oro, donde la brillantez artística toma el centro del escenario! ¡Que empiece la celebración!`;
              
             parrafo2.innerHTML += nuevoTextoCompleto2.charAt(index2);
              index2++;
          
              if (index2 < nuevoTextoCompleto2.length) {
                  setTimeout(function() {
                      escribirTexto2(nuevoTextoCompleto2);
                  }, 48);

                  botonOmitir.addEventListener("click",function(){
                    comentaristaGlobos.remove();
                    contenedorTraduccion2.style.display="none";
                    botonOmitir.style.display="none";
                    pantallaCarga.classList.remove('pantallaCargaOf')
                    pantallaCarga.classList.add('pantallaCargaOn')
                    const omitirTexto = setTimeout(function() {
                      escribirTexto2(nuevoTextoCompleto2)
                    },1);
                  });
                }
                else{

                                  /* MINIJUEGO GLOBOS DE ORO */


                  setTimeout(() => {
                    pantallaCarga.classList.remove('pantallaCargaOn')
                    pantallaCarga.classList.add('pantallaCargaOf')
                    let musicaAmbiental = document.querySelector('.sonidoAmbiente');
                    let sliderPremiosGlobos = document.querySelector('.contenedorGlobos .sliderPremiosOf');
                    let opcionesGlobos = document.querySelector('.contenedorGlobos .opcionesOf');
  
                    if (sliderPremiosGlobos.classList.contains('sliderPremiosOf')) {
                      sliderPremiosGlobos.classList.remove('sliderPremiosOf');
                      sliderPremiosGlobos.classList.add('sliderPremiosOn');
                      opcionesGlobos.classList.remove('opcionesOf');
                      opcionesGlobos.classList.add('opcionesOn');
                    }
                    else{
                      sliderPremiosGlobos.classList.remove('sliderPremiosOn');
                      sliderPremiosGlobos.classList.add('sliderPremiosOf');
                      opcionesGlobos.classList.remove('opcionesOn');
                      opcionesGlobos.classList.add('opcionesOf');
                    }
                    
                    musicaAmbiental.play();
                    contenedorTraduccion2.style.display='none';
                    comentaristaGlobos.remove();
                    var contadorBueno = 0;
                    var contadorMalo = 0;
                    let peliculasGlobos = document.getElementsByClassName('opcionPeliculaGlobos');
                    let peliculaSeleccionadaGlobos = '';
                    let revelacionImagenGlobos = document.getElementById('revelacionMejorPeliculaGlobos');
                    let cambioMejorPeliculaGlobos = document.getElementById('tituloMejorPeliculaGlobos')
                    incognita = document.querySelector('.mejorPeliculaGlobos .incognita')

                                  /* PREGUNTA 1 GLOBOS DE ORO*/


                    Array.from(peliculasGlobos).forEach(peliculaGlobos => {
                        peliculaGlobos.addEventListener('click', function seleccionMejorPeliculaGlobosDrama() {
                            peliculaSeleccionadaGlobos = this.innerText;
                            if (peliculaSeleccionadaGlobos === 'Oppenheimer') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play(); 
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorPeliculaGlobos.textContent = 'Oppenheimer';
                              },2000)
                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorPeliculaGlobos.textContent = 'Oppenheimer';
  
                              },2000)
                            }
                            console.log(peliculaSeleccionadaGlobos);
                            
                            setTimeout(function(){
                              opcionesGlobos.classList.remove('opcionesOf')
                              opcionesGlobos.classList.add('opcionesOn')
                              revelacionImagenGlobos.style.opacity = '0';
                              let mejorPeliculasGlobos = document.getElementById('mejorPeliculaGlobos');
                              mejorPeliculasGlobos.style.display = 'none';
                              seleccionMejorPeliculaAnimadaGlobos();
                            },4000)
                        });
                    });
                    
                                  /* PREGUNTA 2 GLOBOS DE ORO*/


  
                    function seleccionMejorPeliculaAnimadaGlobos() {
                      let incognita = document.querySelector('.mejorAnimadaGlobos .incognita');
                      let opcionesGlobos = document.querySelector('.contenedorGlobos .opcionesOf');
                      if (opcionesGlobos.classList.contains('opcionesOf')) {
                        opcionesGlobos.classList.remove('opcionesOf');
                        opcionesGlobos.classList.add('opcionesOn');
                      }
                      else{
                        opcionesGlobos.classList.remove('opcionesOn');
                        opcionesGlobos.classList.add('opcionesOf');
                      }
                      let mejorAnimadaGlobos = document.getElementById('mejorAnimadaGlobos');
                      mejorAnimadaGlobos.style.display = 'grid';
                      let revelacionImagenGlobos = document.getElementById('revelacionMejorAnimadaGlobos');
                      let animacionesGlobos = document.getElementsByClassName('opcionAnimacionGlobos');
                      let animacionSeleccionadoGlobos = '';
                      let cambioMejorAnimacionGlobos = document.getElementById('tituloMejorAnimadaGlobos')
  
                      Array.from(animacionesGlobos).forEach(animacionGlobos => {
                        animacionGlobos.addEventListener('click', function() {
                           animacionSeleccionadoGlobos = this.innerText;
  
                            if (animacionSeleccionadoGlobos === 'Kimitachi wa Dō Ikiru ka') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play();
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function() {
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorAnimacionGlobos.textContent = 'Kimitachi wa Dō Ikiru ka';
                              },2000)
  
                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorAnimacionGlobos.textContent = 'Kimitachi wa Dō Ikiru ka';
                              },2000)
                            }
                            console.log(animacionSeleccionadoGlobos);
                            setTimeout(function(){
                              opcionesGlobos.classList.remove('opcionesOf')
                              opcionesGlobos.classList.add('opcionesOn')
                              revelacionImagenGlobos.style.opacity = '0';
                              mejorAnimadaGlobos.style.display = 'none';
                              seleccionMejorActrizComediaGlobos();
                            },4000)
                        });
                    });

                    
                                  /* PREGUNTA 3 GLOBOS DE ORO*/


  
                    function seleccionMejorActrizComediaGlobos() {
                      let incognita = document.querySelector('.mejorActrizGlobos .incognita');
                      let opcionesGlobos = document.querySelector('.contenedorGlobos .opcionesOf');
                      if (opcionesGlobos.classList.contains('opcionesOf')) {
                        opcionesGlobos.classList.remove('opcionesOf');
                        opcionesGlobos.classList.add('opcionesOn');
                      }
                      else{
                        opcionesOscars.classList.remove('opcionesOn');
                        opcionesOscars.classList.add('opcionesOf');
                      }
                      let mejorActrizGlobos = document.getElementById('mejorActrizGlobos');
                      mejorActrizGlobos.style.display = 'grid';
                      let revelacionImagenGlobos = document.getElementById('revelacionMejorActrizGlobos');
                      let actricesGlobos = document.getElementsByClassName('opcionActrizGlobos');
                      let actricesSeleccionadoGlobos = '';
                      let cambioMejorActrizGlobos = document.getElementById('tituloMejorActrizGlobos')
  
                      Array.from(actricesGlobos).forEach(actrizGlobos => {
                        actrizGlobos.addEventListener('click', function() {
                            actricesSeleccionadoGlobos = this.innerText;
  
                            if (actricesSeleccionadoGlobos === 'Emma Stone') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play();
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function() {
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorActrizGlobos.textContent = 'Emma Stone';
                              },2000)
  
                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorActrizGlobos.textContent = 'Emma Stone';
                              },2000)
                            }
                            console.log(actricesSeleccionadoGlobos);
                            setTimeout(function(){
                              opcionesGlobos.classList.remove('opcionesOf')
                              opcionesGlobos.classList.add('opcionesOn')
                              revelacionImagenGlobos.style.opacity = '0';
                              mejorActrizGlobos.style.display = 'none';
                              seleccionMejorDirectorGlobos();
                            },4000)
                        });
                     });
                    };
                    
                                  /* PREGUNTA 4 GLOBOS DE ORO*/


  
                    function seleccionMejorDirectorGlobos() {
                      let incognita = document.querySelector('.mejorDirectorGlobos .incognita');
                      let opcionesGlobos = document.querySelector('.contenedorGlobos .opcionesOf');
                      if (opcionesGlobos.classList.contains('opcionesOf')) {
                        opcionesGlobos.classList.remove('opcionesOf');
                        opcionesGlobos.classList.add('opcionesOn');
                      }
                      else{
                        opcionesGlobos.classList.remove('opcionesOn');
                        opcionesGlobos.classList.add('opcionesOf');
                      }
                      let mejorDirectorGlobos = document.getElementById('mejorDirectorGlobos');
                      mejorDirectorGlobos.style.display = 'grid';
                      let revelacionImagenGlobos = document.getElementById('revelacionMejorDirectorGlobos');
                      let directoresGlobos = document.getElementsByClassName('opcionDirectorGlobos');
                      let directoresSeleccionadoGlobos = '';
                      let cambioMejorDirectorGlobos = document.getElementById('tituloMejorDirectorGlobos')
  
                      Array.from(directoresGlobos).forEach(directorGlobos => {
                        directorGlobos.addEventListener('click', function() {
                            directoresSeleccionadoGlobos = this.innerText;
  
                            if (directoresSeleccionadoGlobos === 'Christopher Nolan') {
                              contadorBueno++
                              incognita.src = "../img/premios/correcto.png"
                              sonidoCorrecto.play();
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function() {
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorDirectorGlobos.textContent = 'Christopher Nolan';
                              },2000)
  
                            }
                            else{
                              contadorMalo++
                              incognita.src = "../img/premios/incorrecto.png"
                              sonidoIncorrecto.play();
                              opcionesGlobos.classList.remove('opcionesOn')
                              opcionesGlobos.classList.add('opcionesOf')
                              setTimeout(function(){
                                incognita.style.opacity = '0';
                                revelacionImagenGlobos.style.opacity = '1';
                                cambioMejorDirectorGlobos.textContent = 'Christopher Nolan';
                              },2000)
                            }
                            console.log(directoresSeleccionadoGlobos);
                            setTimeout(function(){
                              opcionesGlobos.classList.remove('opcionesOf')
                              opcionesGlobos.classList.add('opcionesOn')
                              revelacionImagenGlobos.style.opacity = '0';
                              mejorDirectorGlobos.style.display = 'none';
                              resultadosGlobos();
                            },4000)
                        });
                     });
                    };
                    
                                  /* RESULTADOS DE GLOBOS DE ORO*/


  
                    function resultadosGlobos(){
                      fondoPremios.src = "";
                      musicaAmbiental.remove();
                      const luces = document.querySelector('.luces')
                      luces.play();
                      setTimeout(function(){
                        musicaAmbiental.play();
                        var contenidoResultadoGlobos = document.querySelector(".globos .resultados");
                        var tipoPremioGlobos = document.querySelector(".globos .resultados .tipoPremio");
                        var tituloPorPuntosGlobos = document.querySelector(".globos .resultados .tituloDePuntuacion");
                        contenidoResultadoGlobos.style.display = 'grid';
                        var totalContadorGlobos = contadorBueno + contadorMalo;
                        var puntuacionGlobos = document.querySelector('.globos .puntuacion')
                        puntuacionGlobos.textContent = contadorBueno + "/" + totalContadorGlobos;
                        fondoPremios.src = "../img/premios/resultados.png"
                        switch (true) {
                          case (contadorBueno ===0):
                            tituloPorPuntosGlobos.textContent = "El cineasta por postureo";
                            break;
                          case (contadorBueno <=2):
                            tipoPremioGlobos.textContent = "Buen cineasta pero intentalo un poco mejor";
                            break;
                          case (contadorBueno <=4):
                            tituloPorPuntosGlobos.textContent = "El cineasta estrella";
                            break;
                          default:
                            tituloPorPuntosGlobos.textContent = "ERROR";
                            break;
                        }
                      },1000);
                    }
             
                  }
  
                  }, 2000);
                  index = 0;
                }
  
              }
              const comentaristaGlobos= document.querySelector('.comentaristaGlobos');
              let contenedorGlobos = document.querySelector('.contenedorGlobos');
              contenedorGlobos.style.display = 'grid';
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioGlobos.jpeg";
              comentaristaGlobos.play();
                

            break;
            
            default:
              break;
          }
        }, 4000);
      }
    }
  });
});

          /* FUNCION PARA ESTRABLECER LA VALORACION (ESTRELLAS) EN LA PAGINA pelis.html */


document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.querySelector('.contenedorStars');
    const stars = ratingContainer.querySelectorAll('.star');
  
    stars.forEach(function (stars) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].addEventListener('mouseover', function () {
        highlightStars(i);
      });
  
      ratingContainer.addEventListener('mouseleave', function () {
        resetStars();
      });
  
      stars[i].addEventListener('click', function () {
        setRating(i + 1);
      });
    }
  
    function highlightStars(index) {
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('active');
      }
  
      for (let i = index + 1; i < stars.length; i++) {
        stars[i].classList.remove('active');
      }
    }
  
    function resetStars() {
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('active');
      }
    }
  
    function setRating(rating) {
      resetStars();
  
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active');
      }
    }
  });
});

/*-------------------------------------------------------------------------------------------------------------------- */




/*CONTACTO*/
const imagenesNosotros = document.getElementsByClassName("imagenNosotros");

for (let imagen of imagenesNosotros) {
    imagen.addEventListener("click", info());
}

function info(event) {
    alert("Has hecho clic en: " + event.target.alt);
}


/*CONTACTO*/
google.charts.load('current', {'packages':['corechart']});

// Draw the pie chart and bar chart when Charts is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Datos de la tabla y tipos
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Usuario');
  data.addColumn('number', 'Edad');
  data.addColumn('number', 'Comentarios');

  let users = [
    {
      "nombre": "Ana García",
      "edad": 25,
      "fecha_de_nacimiento": "1999-03-15",
      "sexo": "Femenino",
      "nickname": "anag95",
      "cantidad_de_comentarios": 92
    },
    {
      "nombre": "Juan Pérez",
      "edad": 30,
      "fecha_de_nacimiento": "1994-08-20",
      "sexo": "Masculino",
      "nickname": "juapz",
      "cantidad_de_comentarios": 45
    },
    {
      "nombre": "María López",
      "edad": 22,
      "fecha_de_nacimiento": "2002-01-10",
      "sexo": "Femenino",
      "nickname": "marylo",
      "cantidad_de_comentarios": 56
    },
    {
      "nombre": "Carlos Martínez",
      "edad": 28,
      "fecha_de_nacimiento": "1996-11-05",
      "sexo": "Masculino",
      "nickname": "carlitos88",
      "cantidad_de_comentarios": 120
    }
  ]; 

  users.forEach(users => {
    data.addRow([users.nickname, users.edad, users.cantidad_de_comentarios]);
    
  });

  // Opciones de la tabla, características
  var chart_options = {
    title: 'Usuarios con mayor actividad en la página',
    width: 400,
    height: 300
  };

  var piechart = new google.visualization.BarChart(document.getElementById('chart_div'));
  piechart.draw(data, chart_options);

  var barchart = new google.visualization.PieChart(document.getElementById('barchart_div'));
  barchart.draw(data, chart_options);
}




