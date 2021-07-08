import Route from "../libs/route";

class Inicio extends Route {
   constructor(){
      super("pueba",{
         htmlName: "/views/inicio.html",
         default: true
      });
   }
}

const inicio = new Inicio();
export default inicio;