import {cards, inputscheck, filtradoPorCategoria, filtradoPorBusqueda, filtrados } from '../../module/funciones.js'
const div2 = document.getElementById('divrow1');


let datos = data.events;
const uncoming = datos.filter( card => card.date >= data.currentDate)

cards(div2,uncoming);

const divcheck = document.getElementById('checkboxs');
const fragment = document.createDocumentFragment();

let categorias = datos.map(elemento => elemento.category)
let mySet = new Set(categorias);
categorias = Array.from(mySet);


inputscheck(categorias,divcheck)

const seccioncheck = document.getElementById('seccion1');


/* function filtradosPorCategorias2(categorias,checkevalue){  
  categorias.filter( categorias => categorias.category === checkevalue )
}
 */

let divCheckBox = document.getElementById('checkboxs');

seccioncheck.addEventListener('change', (e) =>{
  let filtradoPorBusquedas = filtrados (categorias,uncoming,search)
  cards(div2,filtradoPorBusquedas)
})

const search = document.getElementById('search')



search.addEventListener('input', () => {
let filtradoPorBusquedas = filtrados (categorias,uncoming,search)
cards(div2,filtradoPorBusquedas)
})