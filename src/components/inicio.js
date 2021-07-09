import Route from "../libs/route";

import { getGastos } from "./funciones";
let allGastos;


let contentInfo10Gastos,
title10Gastos,
content10Gastos;

class Inicio extends Route {
   constructor(){
      super("pueba",{
         htmlName: "/views/inicio.html",
         default: true
      });
      this.onMountCb = this.whenMounted;
   }

   async whenMounted() {

      allGastos = getGastos();
      content10Gastos = document.getElementById("content10Gastos");
      contentInfo10Gastos = document.getElementById("contentInfo10Gastos");
      title10Gastos = document.getElementById("title10Gastos");
      this.show10Gastos();
   }

   show10Gastos() {

      const divElementBtn = document.createElement('div');
      divElementBtn.className = "d-flex justify-content-center mt-4";

      if (allGastos.length > 0) {         

         for (let i = 0; i < allGastos.length; i++) {
            if(i > 9){
               break;
            }
            const gasto = allGastos[i];
            content10Gastos.innerHTML += `
               <div class="col-12 col-md-4 col-lg-3 mb-3">
                  <div class="card card-gastos">
                     <div class="card-body ">
                        <h4 class="card-title">${gasto.categoria}</h4>
                        <p class="mb-0 "><strong>${gasto.moneda}</strong> ${gasto.monto}</p>
                        <p class="mb-0 float-end">${gasto.fecha}</p>
                     </div>
                  </div>
               </div>
            `;

            if (allGastos.length == 1) {
               title10Gastos.innerHTML = `Ultimo Gasto`;
               
            }else {
               title10Gastos.innerHTML = `Ultimos ${i+1} Gastos`;            
            }
         }

         divElementBtn.innerHTML = `<a href="#gastos" class="btn btn-primary">Ver Todos</a>`;
         contentInfo10Gastos.appendChild(divElementBtn);

      }else {
         title10Gastos.innerHTML = `Gastos`;
         content10Gastos.innerHTML = `
            <div class="col-12 col-md-6  mb-3 text-center">
               <h3>Aun no has agregado algun gasto</h3>
            </div>
         `;
         divElementBtn.innerHTML = ` <a href="#agregar" class="btn btn-primary">Agregar Gastos</a>`;
         contentInfo10Gastos.appendChild(divElementBtn);
      }
   }
}

const inicio = new Inicio();
export default inicio;