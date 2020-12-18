

var editando = false;

function editar(seccion){
  if (editando == false){
    editando = true;
    var vth = console.log(seccion.parentNode);
    var vth = seccion.parentNode;
    var vtr = vth.parentNode;
    var celdas = vtr.getElementsByTagName("th");
    var alimento = celdas['0'];
    var calorias = celdas['1'];
    var grasas = celdas['2'];
    var proteina = celdas['3'];
    var carbohidratos = celdas['4'];
    var ok = celdas['5'];
    var editar = celdas['6'];
    console.log(alimento);

    alimento.innerHTML = '<td><input type="text" name="alimento" id="alimento" size="10" ></td>';
    calorias.innerHTML= '<td><input type="text" name="alimento" id="calori" size="10"></td>';
    grasas.innerHTML = '<td><input type="text" name="alimento" id="grasas" size="10"></td>';
    proteina.innerHTML = '<td><input type="text" name="alimento" id="proteina" size="10"></td>';
    carbohidratos.innerHTML = '<td><input type="text" name="alimento" id="carbohidratos" size="10"></td>';
    proteina.innerHTML = '<td><input type="text" name="alimento" id="proteina" size="10"></td>';
    ok.innerHTML = '<select name = "estado" id="ok"> <option value = "1"> true </option> <option value = "2"> false </option> </select>';
    editar.innerHTML = '<p style="color:#7777a6"> En edicion </p>';

    var divis = ((vtr.parentNode).parentNode).parentNode;
    divis.innerHTML += '<p class="text-justify">Pulse aceptar para guardar los cambios o cancelar para anularlos </p>'+
    '<button type="submit" class="btn btn-success" onclick = "confirmar()">Aceptar</button>' +
    '<button type="button" class="btn btn-danger" onclick = "cancelar()">Cancelar</button>';




  }
  else {
    alert('Solo se puede editar una fila a la vez, recargue la pagina o pulse cancelar');
  }

}



function cancelar(){
  window.location.reload();
}

function getV(id){
  return document.getElementById(id).value
}

function getLista(id){
  var lista = document.getElementById(id);
  // Obtener el valor de la opción seleccionada
  var valorSeleccionado = lista.options[lista.selectedIndex].value;
  // Obtener el texto que muestra la opción seleccionada
  return lista.options[lista.selectedIndex].text;
}

function confirmar(){
  const str1 = 'recibido.html?alimento=';
  var enlace = str1.concat(getV("alimento"),'&calorias=',getV("calori"),'&grasas=',getV("grasas"),'&proteina=',getV("proteina"),'&carbohidratos=',getV("carbohidratos"),'&image=',getLista("ok"));
//  window.location.href = "recibido.html?alimento=alimento&calorias=48&grasas=0.3&proteina=0.4&carbohidratos=12.7&image=ok"
  window.location.href = enlace;
}
