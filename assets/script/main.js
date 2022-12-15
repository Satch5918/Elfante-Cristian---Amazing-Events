const div1 = document.getElementById('divrow');
let datos = data.events;

function cards (div,objdato) {
    let stringcard = "";
    objdato.forEach(card => { 
        stringcard += `<div class="card col-3">
            <img class="cardimg" src=${card.image} alt="${card.name}">
            <div class="card-body cartas">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text textocard">${card.description}</p>
            </div>
            <div class="card-body bodycard">
                <p class="card-link textocard">Price: $ ${card.price}</p>
                <a href="./details.html" class="card-link button">Details</a>
                </div>
            </div>`;    
    });
div.innerHTML = stringcard;
}

cards(div1,datos);

const divcheck = document.getElementById('checkboxs');
const fragment = document.createDocumentFragment();

let categorias = datos.map(elemento => elemento.category)
let mySet = new Set(categorias);
categorias = Array.from(mySet);


function inputscheck(inputs, contenedorInput){
let checkboxes = '';
  inputs.forEach(category => {
  checkboxes += `<label class="form-check-label boxcheck">${category}<input class="form-check-input" type="checkbox" value="${category}">
  </label>`  
})
contenedorInput.innerHTML += checkboxes;
}
inputscheck(categorias,divcheck)

const seccioncheck = document.getElementById('seccion1');


/* function filtradosPorCategorias2(categorias,checkevalue){  
  categorias.filter( categorias => categorias.category === checkevalue )
}
 */
function filtradoPorCategoria(selectedCategories){
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
  selectedCategories = Array.from(checkbox).map(element =>  element.value)  
  const algo = selectedCategories.map(element =>  datos.filter(event => {
    return event.category === element
  })).flat();

  if (!selectedCategories.length){
    cards(div1,datos);
  }
  else {
    cards(div1,algo);
  }  
}
let divCheckBox = document.getElementById('checkboxs');

seccioncheck.addEventListener('change', (e) =>{

  filtradoPorCategoria(categorias)  
})

const search = document.getElementById('search')

function filtradoPorBusqueda(nombres, searchsvalue){

return nombres.filter(nombres => nombres.name.toLowerCase().includes(searchsvalue.toLowerCase())) 
}

search.addEventListener('input', () => {
let filtradoPorBusquedas = filtradoPorBusqueda(datos,search.value)
cards(div1,filtradoPorBusquedas)

})

/* function filtrados (){

  let filtradoPorCategorias = filtradoPorCategoria(categorias)
  let filtradoPorBusquedas = filtradoPorBusqueda(filtradoPorCategorias,search.value)
  
  return filtradoPorBusquedas;
} */