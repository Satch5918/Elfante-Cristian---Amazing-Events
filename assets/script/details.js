let datos = data.events;

/* const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get('id') */

const idResumido = new URLSearchParams(location.search).get('id')

const finded = datos.find(item => item._id == idResumido)

const contenedor = document.getElementById('contenedor')

contenedor.innerHTML = `<div id="divdetals1">
<img id="imgdetail" src=${finded.image} alt="">
</div>
<div id="divdetals2">
<h3>${finded.name}</h3>
<h4>${finded.category}</h4>
<p class="pdetails" >${finded.description}</p>
<p>Place: ${finded.place} </p>
<p>Price: $${finded.price}</p>
<div class="btn-group ">
  <a href="#" class="btn btn-primary active butonDetails" aria-current="page">Buy</a>
  <a href="./index.html" class="btn btn-primary butonDetails">Back</a>
</div>
</div>`