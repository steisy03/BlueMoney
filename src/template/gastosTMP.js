var gastosTMP = `
<div class="col-12 col-md-6  mb-4">
            <div class="card card-gastos gasto">
               <div class="card-body row ">
                  <div class="info col-9 ">
                     <h4 class="card-title">{{DESCRIPCION}}</h4>
                     <p class="mb-1"><strong>{{MONEDA}}</strong> {{MONTO}}</p>
                     <p class="">{{CATEGORIA}}</p>
                     <p class="mb-0 ">{{FECHA}}</p>
                  </div>
                  <div class="funciones col-3 row align-content-around p-0">
         
                     <div class="col-12 d-flex justify-content-end p-0">
                     <a href="#" class="btn-edit" title="Editar">
                        <img src="./assets/img/edit.svg" height="25" width="26" alt="">
                     </a>
                     </div>
         
                     <div class="col-12 d-flex justify-content-end p-0">
                     <a href="#" class="btn-delete" title="Eliminar">
                        <img src="./assets/img/delete.svg" height="25" width="26" alt="">
                     </a>
                     </div>
         
                  </div>
               </div>
            </div>
         </div>
`;
export default gastosTMP;