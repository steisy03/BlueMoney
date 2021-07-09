import Router from "./libs/router";

import inicio from "./components/inicio";
import agregar from "./components/agregar";
import gastos from "./components/gastos";

window.onload = function ()  {
   let routes = [
      inicio,
      gastos,
      agregar
   ];

   new Router("root", routes);

}