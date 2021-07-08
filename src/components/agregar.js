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
   }
}

const agregar = new Agregar();
export default agregar;