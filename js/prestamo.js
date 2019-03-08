axios.get("https://reqres.in/api/products")
      .then(tabular);

var nombre;
var libros = [];
var table = document.getElementById("paraPrestamo");
var libroP = document.getElementById("libroP");
var detallesNombre = document.getElementById("detallesNombre");
var modificarNombre = document.getElementById("modificarNombre");
var elements = [];


function tabular(response){
  libros = response.data.data;

for (var i = 0; i < libros.length; i++) {
    nombre = libros[i].name;
    var isbn = libros[i].id;

    //INSERTAR LOS DATOS EN LA TABLA

    var row = table.insertRow(1);
    var id = row.insertCell(0);
    var nombreLibro = row.insertCell(1);
    var detalles = row.insertCell(2);
    var modificar = row.insertCell(3);
    var eliminar = row.insertCell(4);
    var prestar = row.insertCell(5);

    nombreLibro.innerHTML = nombre;
    id.innerHTML = isbn;

    var details = document.createElement('img');
    details.src = "http://geoapps.esri.co/Recursos/biblioteca_Entrenamiento/detalles.png";
    details.setAttribute("width", "20%");
    detalles.setAttribute("onclick", "detallesLibro("+i+");");
    detalles.appendChild(details);

    var modify = document.createElement('img');
    modify.src = "http://geoapps.esri.co/Recursos/biblioteca_Entrenamiento/editar.png";
    modify.setAttribute("width", "20%");
    modificar.setAttribute("onclick", "recopilarFormularioModificar("+i+");");
    modificar.appendChild(modify);

    var deleteL = document.createElement('img');
    deleteL.src = "http://geoapps.esri.co/Recursos/biblioteca_Entrenamiento/eliminar.png";
    deleteL.setAttribute("width", "20%");
    eliminar.setAttribute("onclick", "recopilarFormularioEliminar("+i+");");
    eliminar.appendChild(deleteL);

    var prestarBoton = document.createElement('a');
    prestarBoton.setAttribute("onclick", "recopilarFormularioEnviar("+i+");");
    prestar.appendChild(prestarBoton);
    prestarBoton.innerHTML = "Prestar";


    details.addEventListener("mouseover", function(event) {
      event.target.style.transform = "scale(0.8)";
      event.target.style.cursor = "pointer";
  });
    details.addEventListener("mouseout", function(event) {
    event.target.style.transform = "scale(1.0)";
  });

    modify.addEventListener("mouseover", function(event) {
      event.target.style.transform = "scale(0.8)";
      event.target.style.cursor = "pointer";
});
    modify.addEventListener("mouseout", function(event) {
// highlight the mouseover target
  event.target.style.transform = "scale(1.0)";
});
  deleteL.addEventListener("mouseover", function(event) {
event.target.style.transform = "scale(0.8)";
event.target.style.cursor = "pointer";
  });
  deleteL.addEventListener("mouseout", function(event) {
// highlight the mouseover target
  event.target.style.transform = "scale(1.0)";
});
}

}

var nombreLibroPrestar;
var nombreModificar;
var nombreLibroEliminar;

function recopilarFormularioEnviar(i){
  $("#modal").addClass("is-active");
  nombreLibroPrestar = libros[i].name;
  libroP.innerHTML = nombreLibroPrestar;
}

function enviar(){
  console.log(nombreLibroPrestar);
  var persona = document.getElementById("correo").value;
  console.log(persona);
  location.reload();
}

function detallesLibro(i){
  $("#detalles").addClass("is-active");
  detallesNombre.innerHTML = libros[i].name;
}

function recopilarFormularioModificar(i){
  $("#modificar").addClass("is-active");
  modificarNombre.innerHTML = libros[i].name;
}

function recopilarFormularioEliminar(i){
  $("#eliminar").addClass("is-active");
  nombreLibroEliminar = libros[i].name;

}
function modificar(){
   $(".modal").removeClass("is-active");
   location.reload();
}

function eliminar(){
   $(".modal").removeClass("is-active");
   location.reload();
}

function registrarLibro(){
  $(".modal").removeClass("is-active");
  location.reload();
}
