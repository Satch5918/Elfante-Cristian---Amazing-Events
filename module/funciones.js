export function cards (div,objdato) {
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
                <a href="./details.html?id=${card._id} " class="card-link button">Details</a>
                </div>
            </div>`;    
    });
div.innerHTML = stringcard;
}

export function inputscheck(inputs, contenedorInput){
    let checkboxes = '';
      inputs.forEach(category => {
      checkboxes += `<label class="form-check-label boxcheck">${category}<input class="form-check-input" type="checkbox" value="${category}">
      </label>`  
    })
    contenedorInput.innerHTML += checkboxes;
}

export function filtradoPorCategoria(datos,selectedCategories){
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
    selectedCategories = Array.from(checkbox).map(element =>  element.value)  
    const algo = selectedCategories.map(element =>  datos.filter(event => {
      return event.category === element
    })).flat();
  
    if (!selectedCategories.length){
      return datos
    }
    else {
      return algo
    }  
}

export function filtradoPorBusqueda(nombres, searchsvalue){

    return nombres.filter(nombre => nombre.name.toLowerCase().includes(searchsvalue.toLowerCase())) 
}

export function filtrados (categorias,datos,search){
    let filtradoPorCategorias = filtradoPorCategoria(datos,categorias)
    let filtradoPorBusquedas = filtradoPorBusqueda(filtradoPorCategorias,search.value)
    
    return filtradoPorBusquedas;
}
