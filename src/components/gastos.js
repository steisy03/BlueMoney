import Route from "../libs/route";
import { getCategorias, getGastos } from "./funciones";
let allGastos;

import gastosTMP from "../template/gastosTMP";

var contentGastos, cantidadGastos;

//inputs
let sCategoria;
let iDescripcion;
let sMoneda;
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
      iDescripcion = document.getElementById("iDescripcion");
      sMoneda = document.getElementById("sMoneda");
      //fin inputs

      //añadiendo evento update
      sCategoria.addEventListener("change", () => this.filtrar());
      iDescripcion.addEventListener("keyup", () => this.filtrar());
      sMoneda.addEventListener("change", () => this.filtrar());
      //fin añadiendo evento update

      const selectCategorias = getCategorias();

      let id = 1;

      selectCategorias.forEach(element => {
         console.log(element);
         let option = document.createElement('option');
         option.value = id;
         option.innerHTML = element.nombre;
         sCategoria.appendChild(option);
         id++;
      });
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

   filtrar(){
      let gastos = allGastos;
      let resultado = [];

      if(iDescripcion.value != ""){
         resultado = [];
         gastos = gastos.filter( gastos => gastos.descripcion.includes(iDescripcion.value));
         resultado.push.apply(resultado,gastos);
      }

      if(sCategoria.value != ""){
         resultado = [];
         gastos = gastos.filter( gasto => gasto.categoria == sCategoria.value);
         resultado.push.apply(resultado,gastos);
      }

      if(sMoneda.value != ""){
         resultado = [];
         gastos = gastos.filter( gastos => gastos.moneda.includes(sMoneda.value));
         resultado.push.apply(resultado,gastos);
      }

      this.showGastos(resultado);
   }

}

const gastos = new Gastos();
export default gastos;