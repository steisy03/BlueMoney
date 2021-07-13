//Aquí pueden ir funciones que todos pueden usar

function changeFormStatusBootstrap(validado) {
   //Solo cambia la clase de cuando necesita ser validado o no.
   //Debe de recibir un true o un false
   var forms = document.querySelector('.needs-validation');

   if(!validado){
      forms.classList.add('was-validated');
      // console.log(validado)
   }else {
      forms.classList.remove('was-validated');
      // console.log(validado)
   }
}


//funciones relacionadas con los Gastos
function saveGastos(nuevoGasto) {
   let gastos = getGastos();
   gastos.unshift(nuevoGasto);
   updateGastos(gastos);
}

function getGastos() {
   let gastos = JSON.parse(localStorage.getItem("Gastos"));

   if (gastos == null) {
      gastos = [];
      updateGastos(gastos);
   }
   return gastos;
}

function updateGastos(gastos) {
   localStorage.setItem("Gastos", JSON.stringify(gastos));
}

function saveCategorias(nuevaCategoria)
{
   let categorias = getCategorias();
   categorias.push(nuevaCategoria);
   updateCategoria(categorias);
}

function getCategorias() {
   let categorias = JSON.parse(localStorage.getItem("Categorias"));

   if (categorias == null) {
      categorias = [];
      updateGastos(categorias);
   }
   return categorias;
}

function updateCategoria(categorias)
{
   localStorage.setItem("Categorias", JSON.stringify(categorias));
}

//Fin funciones relacionadas con los Gastos

export { changeFormStatusBootstrap, saveGastos, getGastos, saveCategorias, getCategorias }