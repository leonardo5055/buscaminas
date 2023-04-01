//Constantes del juego
const COLUMNAS = 10;
const FILAS = 10;
const CANTIDAD_MINAS = 10;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");

  // Modificar/completar

  
  ponerMinasTablero()
  casillerosSinDescubrir = FILAS*COLUMNAS;
  
}


function draw() {
  
  if (hizoClick == true)
  {
    if (mouseButton == LEFT){
      if (descubrirCasillero(columnaPresionada, filaPresionada)){
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA); //pinta el casillero clickeado. Modificar/completar
        contarMinasAlrededor();
      }else if (tieneMinaCasillero(columnaPresionada, filaPresionada)){ //ver si tine una mina para perder
        perder();
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_CON_MINA); 
        mostrarMinas(COLUMNAS, FILAS)
      }else if (casillerosSinDescubrir == CANTIDAD_MINAS){
        ganoElJuego();
      }

    }
    else{
      pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO); 
    }
    mostrarMinas()
    //console.log(tableroDeMinas);
    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }
  
}


function ganoElJuego()
{
  console.log("Victory")
  ganar();
  return false;   //Esto hace que NUNCA gane el juego. Modificar/completar
}

function ponerMinasTablero()
{
  for (let contador = 0; contador < CANTIDAD_MINAS; contador++)
  {
    var columnamina = floor(random(0, 10));
    var filamina = floor(random(0, 10));
    console.log(columnamina+" , "+filamina);
    ponerMinaCasillero(columnamina,filamina);
  }
}

function mostrarMinas(COLUMNAS, FILAS)
{
  for (let contadorC = 0; contadorC < COLUMNAS; contadorC++){
    for (let contadorF = 0; contadorF < FILAS; contadorF++){
      if (tieneMinaCasillero(contadorC, contadorF)){ //ver si tine una mina para perder
        pintarCasillero(contadorC, contadorF, COLOR_CASILLERO_CON_MINA); 
      }
    }
  }
  
}

function contarMinasAlrededor(columna, fila)
{
  return 9;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}