const containerHomeCards = document.getElementById("container-cards-home");
const containerUpcomingEventsCards = document.getElementById("container-cards-upcomingEvents");
const containerPastEventsCards = document.getElementById("container-cards-pastEvents");
let dateOfEvents;
let arrayEvents= [];

dateOfEvents = data.currentDate;
arrayEvents = data.events;
let arrayEventsUpComing = arrayEvents.filter(events => events.date > dateOfEvents)
let arrayEventsPast = arrayEvents.filter(events => events.date < dateOfEvents)


/* Agregar categorias checkboxs dinamicamente */
const categories = new Set(arrayEvents.map((events) => events.category) 
                                      .sort())
//recorre el array y busca la propiedad de categorias
//ordenar alfabeticamente
//Crea un objeto con las categorias y deja 1 solo si tiene duplicado
let checkbox = document.getElementById('js-container-category')
// forEach hago que itere categorys y por cada categoria la agregue atravez de un input  en el container checkbox
categories.forEach(function (cat) {
  checkbox.innerHTML += `<input id="categoria" class="valuesCheckbox gap-3" type="checkbox" value="${cat}"> ${cat} </label> `
})
/* FIN gregar categorias checkboxs dinamicamente */

if(containerHomeCards){
   let checkbox = document.getElementById('container-category')
   arrayEvents.forEach(events => addCards(events,containerHomeCards))
  
    /* BOTON BUSQUEDA */
  const buttonSearch = document.getElementById('button-search')
  buttonSearch.addEventListener('click', () =>{
  const inputSearch = document.getElementById('input-search').value
  console.log(inputSearch)
  filterText(arrayEvents,inputSearch,containerHomeCards)
  })
 /*FIN BOTON BUSQUEDA */

  /* CHECKBOX FILTER */

  /* FIN CHECKBOX */
}
if(containerUpcomingEventsCards){
  const checkbox = document.getElementById('container-category')
                  arrayEventsUpComing.forEach(events => addCards(events,containerUpcomingEventsCards))

            /* BOTON BUSQUEDA */
            const buttonSearch = document.getElementById('button-search')
            buttonSearch.addEventListener('click', () =>{
            const inputSearch = document.getElementById('input-search').value
            console.log(inputSearch)
            filterText(arrayEventsUpComing,inputSearch,containerUpcomingEventsCards)
            })
           /* FIN BOTON BUSQUEDA */
 
}
if(containerPastEventsCards){
  const checkbox = document.getElementById('container-category')
     arrayEventsPast.forEach(events => addCards(events,containerPastEventsCards))

     /* BOTON BUSQUEDA */
     const buttonSearch = document.getElementById('button-search')
     buttonSearch.addEventListener('click', () =>{
     const inputSearch = document.getElementById('input-search').value
     console.log(inputSearch)
     filterText(arrayEventsPast,inputSearch,containerPastEventsCards)
     })
  
   /* FIN BOTON BUSQUEDA */

   
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
      <div class="d-flex  flex-direction-row ">
          <div class="col-6">
          <p>Price: ${dataArray.price}</p>
          </div>
          <div class="col-6">
          <a href="#" class="btn btn-primary bg-button-main">More details</a>
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
  let array = arrayEvents.filter(e =>e.name.toLowerCase().includes(texto.toLowerCase()))
  if(texto === ' '){
    updateArray(container)
     arrayEvents.forEach(e=> addCards(e,container))
     return arrayEvents
  }else{
    updateArray(container)
    array.forEach(e=> addCards(e,container))
    return array
  }
}

function filterCheckBox(arrayEvents){
  let checkboxsInputs = document.querySelectorAll('input[type="checkbox"]')
  let arrayCheckboxs = Array.from(checkboxsInputs)
  let checkeds = arrayCheckboxs.filter(e=> e.checked)
  let checkedTrue = checkeds.map(e=> e.value)
  console.log(checkedTrue)
  if(checkedTrue.length > 0){
    let arrayChecksChange = arrayEvents.filter(e=> checkedTrue.includes(e.category))
    return arrayChecksChange
  }
  return arrayEvents
}


/* /* FILTRO CHECKBOX */
 checkbox.addEventListener('change', (e) => {
  if(containerHomeCards){
    const inputSearch = document.getElementById('input-search').value
    let arraysCategorias = filterCheckBox(arrayEvents)
    //let arrayText = filterText(arrayEventsPast,inputSearch,containerHomeCards);
    updateArray(containerHomeCards)
    arraysCategorias.forEach(e=> addCards(e,containerHomeCards))
   // arrayText.forEach(e=> addCards(e,containerHomeCards))
  }
  if(containerUpcomingEventsCards){
    let arraysCategorias = filterCheckBox(arrayEventsUpComing)
    updateArray(containerUpcomingEventsCards)
  arraysCategorias.forEach(e=> addCards(e,containerUpcomingEventsCards))
  }
  if(containerPastEventsCards){
    const inputSearch = document.getElementById('input-search').value
    let arraysCategorias = filterCheckBox(arrayEventsPast)
  
    updateArray(containerPastEventsCards)
    arraysCategorias.forEach(e=> addCards(e,containerPastEventsCards))
  }
}) 

/*  checkbox.addEventListener('change', (e) => {
  let  value = e.target.value
  let  checked = e.target.checked
  const inputSearch = document.getElementById('input-search').value

  if(checked){
    updateArray(containerHomeCards)
    arrayEvents.filter(events => events.category === value)
               .forEach(events => addCards(events,containerHomeCards))
  filterText(e,inputSearch,containerHomeCards)
  }else{
    updateArray(containerHomeCards)
    arrayEvents.forEach(events => addCards(events,containerHomeCards))
  }
 
}) 
 */

/*    
const buttonSearch = document.getElementById('button-search')
buttonSearch.addEventListener('click', (element) =>{
const inputSearch = document.getElementById('input-search').value
console.log(inputSearch)
updateArray(containerPastEventsCards)

if(inputSearch === ' '){
 updateArray(containerPastEventsCards)
 arrayEvents.filter(events => events.date < dateOfEvents)
.forEach(events => addCards(events,containerPastEventsCards))
}else{
 updateArray(containerPastEventsCards)
 arrayEvents.filter(events => events.date < dateOfEvents && events.name.toLowerCase().includes(inputSearch.toLowerCase()))
 .forEach(events => addCards(events,containerPastEventsCards))  
}
}) */