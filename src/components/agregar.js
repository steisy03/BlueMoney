import Route from "../libs/route";

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
   }
   
   agregar() {
      this.getElements();
      let gastos = [];
      let nuevoGasto = {
         monto: inputMonto.value,
         moneda: radioMoneda.value,
         categoria: selectCategoria.value,
         fecha: inputFecha.value,
         descripcion: textareaDescripcion.value
      }
      
      if(localStorage.getItem("Gastos")){
         gastos = JSON.parse(localStorage.getItem("Gastos"));
         this.addValueLocalStorage(nuevoGasto, gastos);
         
      }else{
         this.addValueLocalStorage(nuevoGasto, gastos);
      }

      this.alertAgregar();
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

   addValueLocalStorage(newGasto, Gastos) {
      Gastos.unshift(newGasto);
      localStorage.setItem("Gastos", JSON.stringify(Gastos));
      this.cleanValueElements();
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