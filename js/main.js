//MODAL PARA REGISTRO
$("#mostrarModal").click(function() {
  $("#modal").addClass("is-active");
});

$(".delete").click(function() {
   $(".modal").removeClass("is-active");
});
$("[name='cancel']").click(function() {
   $(".modal").removeClass("is-active");
});

// MODAL PARA REGISTRO DE LIBROS

$("#nuevoRegistro").click(function() {
  $("#modalRegistro").addClass("is-active");
});
$("#devolucion").click(function() {
  $("#modalDevolucion").addClass("is-active");
});
