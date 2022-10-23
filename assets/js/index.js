const containerHomeCards = document.getElementById("container-cards-home");
const containerUpcomingEventsCards = document.getElementById("container-cards-upcomingEvents");
const containerPastEventsCards = document.getElementById("container-cards-pastEvents");
const checkbox = document.getElementById('js-container-category') 
const search = document.getElementById('input-search')

async function apiAmazingEvents(){
  try{
    let data = await fetch('https://mind-hub.up.railway.app/amazing')    
    data = await data.json()
    let events = data.events
    let date = data.date
    let eventsPast = events.filter(e=> e.date < date)
    let eventsComing = events.filter(e=> e.date > date)
    
 
    crearCheckboxs(events,checkbox);
    if(containerHomeCards){
       toPrintCards(events,containerHomeCards)
       search.addEventListener('keyup',e=>filtrar(events,containerHomeCards))
      checkbox.addEventListener('change',e=> filtrar(events,containerHomeCards))
    }
    if(containerUpcomingEventsCards){
      toPrintCards(eventsComing,containerUpcomingEventsCards)
      search.addEventListener('keyup',e=>filtrar(eventsComing,containerUpcomingEventsCards))
      checkbox.addEventListener('change',e=> filtrar(eventsComing,containerUpcomingEventsCards))
    }
    if(containerPastEventsCards){
      toPrintCards(eventsPast,containerPastEventsCards) 
      search.addEventListener('keyup',e=>filtrar(eventsPast,containerPastEventsCards))
      checkbox.addEventListener('change',e=> filtrar(eventsPast,containerPastEventsCards))
    } 
  }catch(error){
    console.log('Hubo un error al consumir la API')
  }
}
apiAmazingEvents()


/* FUNCIONES */
function crearCheckboxs(eventos,contenedor){
  let fn = eventos => eventos.category
  let categorias = new Set(eventos.filter(fn).map(fn))
  categorias.forEach(categoria =>{
    contenedor.innerHTML +=`<input class="categoria" class="valuesCheckbox gap-3" type="checkbox" value="${categoria}"> ${categoria} </label> `
  })
}
function createCard(evento){
  let div = document.createElement("div");
    div.classList = "row gap-3";
    div.innerHTML = `
      <div class="card mb-2 p-2 d-flex justify-content-between" style="width: 18rem;">
      <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
      <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
      <div class="d-flex  flex-direction-row">
          <div class="col-6">
          <p>Price: ${evento.price}</p>
          </div>
          <div class="col-6">
          <a href="./details.html?events=${evento._id}" class="btn btn-primary bg-button-main">More details</a>
          </div>
      </div> 
      </div>
      `
      return div
}

function toPrintCards(eventos,contenedor){
  contenedor.innerHTML = ''
  if(eventos.length > 0) {
      let fragment = document.createDocumentFragment()
      eventos.forEach( event => fragment.appendChild(createCard(event) ) )
      contenedor.appendChild(fragment)
  }
}

function filtrar(array,container){
  let checkboxInHtml = document.querySelectorAll('input[type="checkbox"]')
  let arrayCheckboxsAll = Array.from(checkboxInHtml)
  let checked = arrayCheckboxsAll.filter(e=> e.checked)
                                  .map(e=> e.value)
  let filtradosPorCategoria = array.filter( e => checked.includes(e.category))
  let filtradosPorSearch = filtradosPorCategoria.filter(event => event.name.toLowerCase().includes(search.value.toLowerCase()))

  if(filtradosPorSearch.length > 0){
    toPrintCards(filtradosPorSearch,container)
  }else{
    toPrintCards(array,container)
  } 
}
/* FIN FUNCIONES */




