import Route from "../libs/route";

class Agregar extends Route {
   constructor() {
      super("agregar", {
         htmlName: "/views/agregar.html",
         default: false
      });
   }
   
   agregar() {
      console.log("Hola agregar");
      document.getElementById("formAgregar").addEventListener('submit', (e)=>{
         e.preventDefault();
         const inputMonto = document.getElementById("inputMonto");
         const selectMoneda = document.getElementById("selectMoneda");
         const selectCategoria = document.getElementById("selectCategoria");
         const inputFecha = document.getElementById("inputFecha");
         const textareaDescripcion = document.getElementById("textareaDescripcion");
      
         let gastos = [];
         let nuevoGasto = {
            monto: inputMonto.value,
            moneda: selectMoneda.value,
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
      
         
      });
   }
}

const agregar = new Agregar();
export default agregar;