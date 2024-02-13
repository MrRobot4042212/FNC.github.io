/*D3 para la grafica*/

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

var goyaAccion = document.querySelector(".goya");
var boton = document.querySelectorAll(".botonZoom");

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
        } else {
          filtrado.style.display = "none";
        }
      });
    });
  });



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

        setTimeout(function () {
          fondoPremios.classList.add("zoomFondoDesaparecer");
          let eleccion = clickedElement.querySelector('.tituloPremio').innerHTML;
          let contenidoPremios = document.querySelector('.contenedorPremio');
          console.log(eleccion);

          switch (eleccion) {

            case 'Premios Goya':

              const comentaristaGoya = document.querySelector('.comentaristaGoya');
              let contenedorGoya = document.querySelector('.contenedorGoya');
              contenedorGoya.style.display = 'grid';
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioGoya.jpeg";
              comentaristaGoya.play();

              break;

            case 'Premios Oscar':
              const parrafo = document.querySelector('.traduccion');
              var contenedorTraduccion = document.querySelector('.contenedorTraduccion');
              var nuevoTextoCompleto = "";

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
                  }, 1);
                }

              else{
                setTimeout(() => {
                  let musicaAmbiental = document.querySelector('.sonidoAmbiente');
                  let sliderPremios = document.querySelector('.sliderPremiosOf');
                  let opciones = document.querySelector('.opcionesOf');

                  if (sliderPremios.classList.contains('sliderPremiosOf')) {
                    sliderPremios.classList.remove('sliderPremiosOf');
                    sliderPremios.classList.add('sliderPremiosOn');
                    opciones.classList.remove('opcionesOf');
                    opciones.classList.add('opcionesOn');
                  }
                  else{
                    sliderPremios.classList.remove('sliderPremiosOn');
                    sliderPremios.classList.add('sliderPremiosOf');
                    opciones.classList.remove('opcionesOn');
                    opciones.classList.add('opcionesOf');
                  }
                  
                  musicaAmbiental.play();
                  contenedorTraduccion.style.display='none';
                  comentaristaOscar.remove();
                  
                  let contadorBueno = 0;
                  let contadorMalo = 0;
                  let peliculas = document.getElementsByClassName('opcionPelicula');
                  let peliculaSeleccionada = '';
          
                  Array.from(peliculas).forEach(pelicula => {
                      pelicula.addEventListener('click', function seleccionMejorPelicula() {
                          peliculaSeleccionada = this.innerText;
                          if (peliculaSeleccionada === 'Todo a la vez en todas partes') {
                            contadorBueno++
                          }
                          else{
                            contadorMalo++
                          }
                          console.log(peliculaSeleccionada);
                          let revelacionImagen = document.getElementById('revelacionMejorPelicula');
                          revelacionImagen.style.opacity = '1';
                          setTimeout( function(){
                            revelacionImagen.style.opacity = '0';
                            let mejorPelicula = document.getElementById('mejorPelicula');
                            mejorPelicula.style.display = 'none';
                            seleccionMejorActor();
                          },2000)
                      });
                  });

                  function seleccionMejorActor() {
                    let opciones = document.querySelector('.opcionesOf');
                    if (opciones.classList.contains('opcionesOf')) {
                      opciones.classList.remove('opcionesOf');
                      opciones.classList.add('opcionesOn');
                    }
                    else{
                      opciones.classList.remove('opcionesOn');
                      opciones.classList.add('opcionesOf');
                    }
                    let mejorActor = document.getElementById('mejorActor');
                    mejorActor.style.display = 'grid';

                    let actores = document.getElementsByClassName('opcionActor');
                    let actorSeleccionado = '';
                    Array.from(actores).forEach(actor => {
                      actor.addEventListener('click', function() {
                          actorSeleccionado = this.innerText;
                          if (actorSeleccionado === 'Brendan Fraser') {
                            contadorBueno++
                          }
                          else{
                            contadorMalo++
                          }
                          console.log(actorSeleccionado);
                          let revelacionImagen = document.getElementById('revelacionMejorActor');
                          revelacionImagen.style.opacity = '1';
                          setTimeout(function(){
                            revelacionImagen.style.opacity = '0';
                            mejorActor.style.display = 'none';
                            seleccionMejorActriz
                          },2000)
                      });
                  });

                    
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
              
               const parrafo2 = document.querySelector('.traduccionGlobos');
              var contenedorTraduccion2 = document.querySelector('.contenedorTraduccion2');
              var nuevoTextoCompleto2 = "";

              setTimeout(function() {
                index2 = 0;
                escribirTexto2(nuevoTextoCompleto2);
            }, 30);

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
                  }, 47);
                }
              else{
                setTimeout(() => {

                  contenedorTraduccion2.style.display='none';

                }, 2000);
                
              }

              const comentaristaGlobos= document.querySelector('.comentaristaGlobos');
              let contenedorGlobos = document.querySelector('.contenedorGlobos');
              contenedorGlobos.style.display="grid";
              fondoPremios.classList.add("aparicionEscenario");
              fondoPremios.src="../img/premios/escenarioGlobos.jpeg";
              comentaristaGlobos.play();
            };

            break;
          
            default:
              break;
          }
        }, 4000);
      }
    }
  });
});


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


/*CONTACTO*/
const imagenesNosotros = document.getElementsByClassName("imagenNosotros");

for (let imagen of imagenesNosotros) {
    imagen.addEventListener("click", info());
}

function info(event) {
    alert("Has hecho clic en: " + event.target.alt);
}


/*Seccion estadisticas*/ 
let canvas = document.getElementById("#grafica")
var chart = new chart(canvas, {
  type:"bar",
  data:{
    labels:["Visitas","Suscriptores","Comentarios"],
    dataset:[
      {
        label:"Films&Critics",
        backgroundcolor:"rgb(0,0,0)",
        data:[3900,400,1245]
      }
    ]
  }
})