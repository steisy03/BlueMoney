import Route from "../libs/route";

class Gastos extends Route {
   constructor(){
      super("gastos", {
         htmlName: "/views/gastos.html",
         default: false
      });
   }
}

const gastos = new Gastos();
export default gastos;