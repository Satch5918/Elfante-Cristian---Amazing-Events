const div3 = document.getElementById('divrow2');

let datos = data.events;

const cards = (div,objdato) => {
let stringcard = "";
const past = objdato.filter( card => card.date < data.currentDate)

past.forEach(card => {  
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

cards(div3,datos);



const divcheck = document.getElementById('checkboxs');
const fragment = document.createDocumentFragment();

let categorias = datos.map(function (elemento){
  return elemento.category
})

let mySet = new Set(categorias);
categorias = Array.from(mySet);

categorias.forEach(category => {
  divcheck.innerHTML += `<label class="form-check-label boxcheck">${category}<input class="form-check-input" type="checkbox" value="${category}">
  </label>`
  
})
console.log(divcheck)
const seccioncheck = document.getElementById('seccion1');

seccioncheck.addEventListener('change', () =>{
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')

selectedCategories = Array.from(checkbox).map(element =>  element.value)

const algo = selectedCategories.map(element =>  datos.filter(event => {
  return event.category === element
})).flat();

if (!selectedCategories.length){
  cards(div3,datos);
}
else {
  cards(div3,algo);
}
})

