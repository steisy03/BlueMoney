import Route from "../libs/route";
//elementos
var inputMonto = undefined;
var selectMoneda = undefined;
var selectCategoria = undefined;
var inputFecha = undefined;
var textareaDescripcion = undefined;
//fin elementos

class Agregar extends Route {
   constructor() {
      super("agregar", {
         htmlName: "/views/agregar.html",
         default: false
      });
      this.onMountCb = this.whenMounted;
      
   }

   async whenMounted() {
      //document ready
      document.getElementById("formAgregar").addEventListener("submit", this.agregar);
      
      inputMonto = document.getElementById("inputMonto");
      // selectMoneda = document.getElementById("selectMoneda");
      //TODO: agregar los radio buttons para la moneda
      selectCategoria = document.getElementById("selectCategoria");
      inputFecha = document.getElementById("inputFecha");
      textareaDescripcion = document.getElementById("textareaDescripcion");
   }
   
   agregar(e) {
      
      let gastos = [];
      let nuevoGasto = {
         monto: inputMonto.value,
         // moneda: selectMoneda.value,
         //TODO: agregar radio buttons
         categoria: selectCategoria.value,
         fecha: inputFecha.value,
         descripcion: textareaDescripcion.value
      }
         
      if(localStorage.getItem("Gastos")){
         gastos = JSON.parse(localStorage.getItem("Gastos"));
         gastos.unshift(nuevoGasto);
         console.log(gastos);
         localStorage.setItem("Gastos", JSON.stringify(gastos));
            
      }else{
         gastos.unshift(nuevoGasto);
         console.log(gastos);
         localStorage.setItem("Gastos", JSON.stringify(gastos));
      }
   }

}

const agregar = new Agregar();
export default agregar;