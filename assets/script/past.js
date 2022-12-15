import {cards, inputscheck, filtradoPorCategoria, filtradoPorBusqueda, filtrados } from '../../module/funciones.js'
const div3 = document.getElementById('divrow2');

let datos = data.events;
const past = datos.filter( card => card.date < data.currentDate)

cards(div3,past);
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
  let filtradoPorBusquedas = filtrados (categorias,past,search)
  cards(div3,filtradoPorBusquedas)
})

const search = document.getElementById('search')

search.addEventListener('input', () => {
let filtradoPorBusquedas = filtrados (categorias,past,search)
cards(div3,filtradoPorBusquedas)

})

