import Route from "../libs/route";
import { changeFormStatusBootstrap, getCategorias, saveGastos } from "./funciones"

//Variables DOM
let inputMonto,
   selectCategoria,
   radioMoneda,
   inputFecha,
   textareaDescripcion,
   contentAlertAgregar;


class Agregar extends Route {
   constructor() {
      super("agregar", {
         htmlName: "/views/agregar.html",
         default: false
      });
      this.onMountCb = this.whenMounted;
   }

   async whenMounted() {
      //When document ready

      document.getElementById("formAgregar").addEventListener('submit', (e)=> {
         e.preventDefault(); 
         this.agregar();
      });

      //Asignar el elemento a las Variables DOM
      this.getElements();

      const listaCategoria = document.getElementById('selectCategoria');

      const selectCategorias = getCategorias();

      let id = 1;

      selectCategorias.forEach(element => {
         console.log(element);
         let option = document.createElement('option');
         option.value = id;
         option.innerHTML = element.nombre;
         listaCategoria.appendChild(option);
         id++;
      });
   }
   
   agregar() {
      this.getElements();
      let nuevoGasto = {
         monto: inputMonto.value,
         moneda: radioMoneda.value,
         categoria: selectCategoria.value,
         fecha: inputFecha.value,
         descripcion: textareaDescripcion.value.trim()
      }
      
      if(inputMonto.value !== '' && 
         selectCategoria.value !== '' && 
         radioMoneda.value !== '' && 
         inputFecha.value !== '' &&
         textareaDescripcion.value.trim() !== ''){

         saveGastos(nuevoGasto);

         this.cleanValueElements();

         this.alertAgregar();

         changeFormStatusBootstrap(true);
      }else {
         changeFormStatusBootstrap(false);
      }
   }

   getElements() {
      selectCategoria = document.getElementById("selectCategoria");
      inputMonto = document.getElementById("inputMonto");
      radioMoneda = document.querySelector("input[name='Moneda']:checked");
      inputFecha = document.getElementById("inputFecha");
      textareaDescripcion = document.getElementById("textareaDescripcion");

      contentAlertAgregar = document.getElementById("contentAlertAgregar");
   }

   cleanValueElements() {
      inputMonto.value = "";
      inputFecha.value = "";
      textareaDescripcion.value = "";
   }

   alertAgregar() {
      //Mostar Alerta de agregado
      contentAlertAgregar.innerHTML = `
      <div class="alert alert-success alertAgregar mt-3">
         <img src="./assets/img/check.svg" alt="" class="me-2"  width="28" height="28">
         <strong>Agregado</strong>
      </div>
      `;

      //Aliminar Alerta de agregado
      setTimeout(() => {
         contentAlertAgregar.innerHTML = "";
      }, 3500);
   }
   
}

const agregar = new Agregar();
export default agregar;