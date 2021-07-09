import Router from "./libs/router";

import inicio from "./components/inicio";
import agregar from "./components/agregar";
import gastos from "./components/gastos";
import categorias from "./components/categorías";


window.onload = function ()  {
   let routes = [
      inicio,
      gastos,
      agregar,
      categorias
   ];

   new Router("root", routes);

}