const containerHomeCards = document.getElementById("container-cards-home");
const containerUpcomingEventsCards = document.getElementById("container-cards-upcomingEvents");
const containerPastEventsCards = document.getElementById("container-cards-pastEvents");
const checkbox = document.getElementById('js-container-category') 

async function apiAmazing(){
  try{
    let data = await fetch('https://mind-hub.up.railway.app/amazing')    
    data = await data.json()
    let events = data.events
    let date = data.date
    console.log(events)
    
    if(containerHomeCards){
      events.forEach(events => addCards(events,containerHomeCards)) 
   } 
   if(containerUpcomingEventsCards){
    events.filter(e=> e.date > date)
                                .forEach(events => addCards(events,containerUpcomingEventsCards))
   } 
   if(containerPastEventsCards){
    events.filter(e=> e.date < date)
          .forEach(events => addCards(events,containerPastEventsCards))
   } 
  }catch(error){
    console.log('Hubo un error al consumir la API')
  }
}
apiAmazing()

/* const categories = new Set(arrayEvents.map((events) => events.category) 
                                      .sort())
   */
function addCards(dataArray,containerCards){
  let div = document.createElement("div");
  div.className = "row gap-3";
  div.innerHTML += `
    <div class="card mb-2 p-2 d-flex justify-content-between" style="width: 18rem;">
    <img src="${dataArray.image}" class="card-img-top" alt="${dataArray.name}">
    <div class="card-body">
    <h5 class="card-title">${dataArray.name}</h5>
    <p class="card-text">${dataArray.description}</p>
    <div class="d-flex  flex-direction-row">
        <div class="col-6">
        <p>Price: ${dataArray.price}</p>
        </div>
        <div class="col-6">
        <a href="./details.html?events=${dataArray._id}" class="btn btn-primary bg-button-main">More details</a>
        </div>
    </div> 
    </div>
    `
    containerCards.appendChild(div);
} 

function updateArray(container) {
  container.innerHTML = ''
}  

function filterText(arrayEvents,texto,container){
let arrayFiltrado = arrayEvents.filter(e =>e.name.toLowerCase().includes(texto.toLowerCase()))
if(texto === ''){
   updateArray(container)
   arrayEvents.forEach(e=> addCards(e,container))
}else{
  updateArray(container)
  arrayFiltrado.forEach(e=> addCards(e,container))
}
}

function filterCheckBox(arrayEvents,container){
let checkboxInHtml = document.querySelectorAll('input[type="checkbox"]')
let arrayCheckboxsAll = Array.from(checkboxInHtml)
let arrayCheckeds = arrayCheckboxsAll.filter(e=> e.checked)
                                     .map(e=> e.value)
console.log(arrayCheckeds)
if(arrayCheckeds.length > 0){
  let arrayChecksChange = arrayEvents.filter(e=> arrayCheckeds.includes(e.category))
  updateArray(container)
  return arrayChecksChange
}
updateArray(container)
return arrayEvents
}

function addCategories(array,checkbox){
  array.forEach(function (cat) {
    checkbox.innerHTML += `<input id="categoria" class="valuesCheckbox gap-3" type="checkbox" value="${cat}"> ${cat} </label> `
  })
}

/* FIN FUNCIONES */

/* FILTRO CHECKBOX */
checkbox.addEventListener('change', (e) => {
if(containerHomeCards){
  let arraysCategorias = filterCheckBox(arrayEvents,containerHomeCards)
  arraysCategorias.forEach(e=> addCards(e,containerHomeCards))  
}
if(containerUpcomingEventsCards){
  let arraysCategorias = filterCheckBox(arrayEventsUpComing,containerUpcomingEventsCards)
  arraysCategorias.forEach(e=> addCards(e,containerUpcomingEventsCards))
}
if(containerPastEventsCards){
  let arraysCategorias = filterCheckBox(arrayEventsPast,containerPastEventsCards)
  arraysCategorias.forEach(e=> addCards(e,containerPastEventsCards))
}
})  


