import Route from "../libs/route";
import { changeFormStatusBootstrap, saveCategorias } from "./funciones"

let nombreCategoria;
let tipoCategoria;
let contentAlertAgregar;

class Categorias extends Route {
   constructor() {
      super("categorias", {
         htmlName: "/views/categorias.html",
         default: true
      });
      this.onMountCb = this.whenMounted;
   }

   async whenMounted() {

      //When document ready

      document.getElementById("formCategoria").addEventListener('submit', (e) => {
         e.preventDefault();
         this.agregarCategoria();
      });

      //Asignar el elemento a las Variables DOM
      this.getElements();
   }

   agregarCategoria() {
      console.log(this.getElements());
      let nuevaCategoria = {
         nombre: nombreCategoria.value,
         tipo: tipoCategoria.value,
      }

      if (nombreCategoria.value !== '' &&
         tipoCategoria.value !== '') {

         saveCategorias(nuevaCategoria);

         this.cleanValueElements();

         this.alertAgregar();

         changeFormStatusBootstrap(true);
      } else {
         changeFormStatusBootstrap(false);
      }
   }

   getElements() {
      nombreCategoria = document.getElementById('nombreCategoria');
      tipoCategoria = document.getElementById('tipoCategoria');
      contentAlertAgregar = document.getElementById("contentAlertAgregar");
   }

   cleanValueElements() {
      nombreCategoria.value = "";
      tipoCategoria.value = "";
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

const categorias = new Categorias();
export default categorias;