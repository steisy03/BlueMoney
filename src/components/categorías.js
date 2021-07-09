import Route from "../libs/route";

class Categorias extends Route {
   constructor(){
      super("categorias",{
         htmlName: "/views/categorias.html",
         default: true
      });
   }
}

const categorias = new Categorias();
export default categorias;