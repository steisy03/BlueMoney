import Route from "../libs/route";

import { getGastos } from "./funciones";


let allGastos = getGastos();

let contentGastos,
cantidadGastos;

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
      cantidadGastos = document.getElementById("cantidadGastos");
      contentGastos = document.getElementById("contentGastos");
      
      this.showGastos();
   }

   showGastos(){
      cantidadGastos.innerHTML = allGastos.length;
      allGastos.forEach(gasto => {
         contentGastos.innerHTML += `
         <div class="col-12 col-md-6  mb-4">
            <div class="card card-gastos gasto">
               <div class="card-body row ">
                  <div class="info col-9 ">
                     <h4 class="card-title">${gasto.categoria}</h4>
                     <p class="mb-1"><strong>${gasto.moneda}</strong> ${gasto.monto}</p>
                     <p class="">${gasto.descripcion}</p>
                     <p class="mb-0 ">${gasto.fecha}</p>
                  </div>
                  <div class="funciones col-3 row align-content-around p-0">
         
                     <div class="col-12 d-flex justify-content-end p-0">
                     <a href="#" class="btn-edit" title="Editar">
                        <img src="./assets/img/edit.svg" height="25" width="26" alt="">
                     </a>
                     </div>
         
                     <div class="col-12 d-flex justify-content-end p-0">
                     <a href="#" class="btn-delete" title="Eliminar">
                        <img src="./assets/img/delete.svg" height="25" width="26" alt="">
                     </a>
                     </div>
         
                  </div>
               </div>
            </div>
         </div>
         `;
      });
   }
}

const gastos = new Gastos();
export default gastos;