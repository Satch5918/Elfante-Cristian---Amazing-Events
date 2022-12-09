const div1 = document.getElementById('divrow');

let datos = data.events;

function cards(div,objdato){
    let stringcard = "";    

for (let card of objdato){
    
    stringcard += `<div class="card col-3">
    <img class="cardimg" src=${card.image} alt="${card.name}">
    <div class="card-body cartas">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text textocard">${card.description}</p>
    </div>
    <div class="card-body bodycard">
        <p class="card-link textocard">Price: $ ${card.price}</p>
        <a href="#" class="card-link button">Details</a>
    </div>
    </div>`;
    
}

div.innerHTML = stringcard;

}
cards(div1,datos);