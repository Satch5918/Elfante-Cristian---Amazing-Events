import {cards, inputscheck, filtradoPorCategoria, filtradoPorBusqueda, filtrados } from '../../module/funciones.js'

const div1 = document.getElementById('divrow');
const divcheck = document.getElementById('checkboxs');
const seccioncheck = document.getElementById('seccion1');
const search = document.getElementById('search')

let datos;
let categorias;

fetch('https://amazing-events.onrender.com/api/events')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos.events;
    categorias = datos.map(elemento => elemento.category)
    let mySet = new Set(categorias);
    categorias = Array.from(mySet);
    cards(div1,datos);
    inputscheck(categorias,divcheck)
} ).catch( error => {
  alert("error");
});

seccioncheck.addEventListener('change', (e) =>{
  let filtradoPorBusquedas = filtrados (categorias,datos,search)
  cards(div1,filtradoPorBusquedas)
})

search.addEventListener('input', () => {
let filtradoPorBusquedas = filtrados (categorias,datos,search)
cards(div1,filtradoPorBusquedas)
})

