let containerUpcomingEventsCards = document.getElementById("container-cards-upcomingEvents");

let dateOfEvents  = data.currentDate;
let arrayEvents = data.events;

let arrayEventsUpcomingEvents = arrayEvents.filter( events => events.date > dateOfEvents)
                                           .forEach(events => addCards(events,containerUpcomingEventsCards))

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
const categories = new Set(arrayEvents.map((events) => events.category) 
                                      .sort())
const checkbox = document.getElementById('js-container-category')
categories.forEach(function (cat) {
    checkbox.innerHTML += `<input id="categoria" class="valuesCheckbox gap-3" type="checkbox" value="${cat}"> ${cat} </label> `
})
/* FIN gregar categorias checkboxs dinamicamente */

/* FILTRO CHECKBOX */


/* FILTRO BOTON */

const buttonSearch = document.getElementById('button-search')

  