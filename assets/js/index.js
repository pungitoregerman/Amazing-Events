const containerHomeCards = document.getElementById("container-cards-home");
const containerUpcomingEventsCards = document.getElementById("container-cards-upcomingEvents");
const containerPastEventsCards = document.getElementById("container-cards-pastEvents");
const inputSearch = document.getElementById('input-search')
const buttonSearch = document.getElementById('button-search')

let dateOfEvents;
let arrayEvents= [];

dateOfEvents = data.currentDate;
arrayEvents = data.events;

if(containerHomeCards){
   arrayEvents.forEach(events => addCards(events,containerHomeCards))
}
if(containerUpcomingEventsCards){
    arrayEvents.filter( events => events.date > dateOfEvents)
                                               .forEach(events => addCards(events,containerUpcomingEventsCards))
}
if(containerPastEventsCards){
     arrayEvents.filter((events) => events.date < dateOfEvents)
    .forEach(events => addCards(events,containerPastEventsCards))
}

function addCards(dataArray,containerCards){
    let div = document.createElement("div");
    div.className = "row gap-3 justify-content-evenly";
    div.innerHTML += `
      <div class="card mb-2 p-2" style="width: 18rem;">
      <img src="${dataArray.image}" class="card-img-top" alt="${dataArray.name}">
      <div class="card-body">
      <h5 class="card-title">${dataArray.name}</h5>
      <p class="card-text">${dataArray.description}</p>
      <div class="d-flex flex-direction-row ">
          <div class="col-6">
          <p>price: ${dataArray.price}</p>
          </div>
          <div class="col-6">
          <a href="#" class="btn btn-primary bg-button-main">More details</a>
          </div>
      </div> 
      </div>
      `
      containerCards.appendChild(div);
  } 
  
/* Agregar categorias checkboxs dinamicamente */
const categories = arrayEvents
  .map((events) => events.category) //recorre el array y busca la propiedad de categorias
  .reduce((a, b) => a.concat(b), [])// evito que repita categorias
  .sort() //ordenar alfabeticamente

let categorys;
categorys = new Set(categories) //Crea un objeto con las categorias
const checkbox = document.getElementById('container-category')

// forEach hago que itere categorys y por cada categoria la agregue atravez de un input  en el container checkbox
categorys.forEach(function (cat) {
    checkbox.innerHTML += `<input class="gap-3" type="checkbox" name=" ${cat}" value=""> ${cat} </label> `
})
/* FIN gregar categorias checkboxs dinamicamente */

/* FILTROS */


