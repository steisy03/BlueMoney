import Route from "../libs/route";
import gastosTMP from "../template/gastosTMP";
import { getGastos } from "./funciones";

var allGastos;
var contentGastos, cantidadGastos;

//inputs
let sCategoria;
//fin inputs

class Gastos extends Route {
   constructor(){
      super("gastos", {
         htmlName: "/views/gastos.html",
         default: false
      });
      this.onMountCb = this.whenMounted;
   }

   async whenMounted() {
      //When document ready
      allGastos = getGastos();
      cantidadGastos = document.getElementById("cantidadGastos");
      contentGastos = document.getElementById("contentGastos");

      //inputs
      sCategoria = document.getElementById("sCategoria");
      //fin inputs

      //añadiendo evento update
      sCategoria.addEventListener("change", () => this.updateCategoria());
      //fin añadiendo evento update
      
      this.showGastos(allGastos);
   }

   showGastos(array){
      cantidadGastos.innerHTML = array.length;
      contentGastos.innerHTML = "";
      array.forEach(gasto => {
      contentGastos.innerHTML += gastosTMP
         .replace("{{DESCRIPCION}}", gasto.descripcion)
         .replace("{{MONEDA}}", gasto.moneda)
         .replace("{{MONTO}}", gasto.monto)
         .replace("{{CATEGORIA}}", gasto.categoria)
         .replace("{{FECHA}}", gasto.fecha);
      });
   }

   updateCategoria(){
      if(sCategoria.value == 0){
         this.showGastos(allGastos);
         return;
      }
      let resultado = allGastos.filter( gastos => gastos.categoria == sCategoria.value);
      this.showGastos(resultado);
   }
}

const gastos = new Gastos();
export default gastos;