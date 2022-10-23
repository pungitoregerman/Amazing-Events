const containerHomeCards = document.getElementById("container-cards-home");
const containerUpcomingEventsCards = document.getElementById("container-cards-upcomingEvents");
const containerPastEventsCards = document.getElementById("container-cards-pastEvents");
const checkbox = document.getElementById('js-container-category') 
const search = document.getElementById('input-search')
let events;
let date;
let eventsPast;
let eventsComing;

async function apiAmazingEvents(){
  try{
    let data = await fetch('https://mind-hub.up.railway.app/amazing')    
    data = await data.json()
    events = data.events
    date = data.date
   eventsPast = events.filter(e=> e.date < date)
    eventsComing = events.filter(e=> e.date > date)
 
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
          <a href="./details.html?events=${evento.id}" class="btn btn-primary bg-button-main">More details</a>
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
  }else{
    contenedor.innerHTML = '<h2> NO HAY COINCIDENCIA CON LOS EVENTOS ESTABLECIDOS.</h2>'
    contenedor.innerHTML += '<h3> REVISE EL NOMBRE INGRESADO.</h3>'
  }
}

function filtrar(array,container){
  let checked = [...document.querySelectorAll( 'input[type="checkbox"]:checked' )].map( ele => ele.value)
  let filtradosPorCategoria = array.filter( e => checked.includes(e.category))
  let filtradosPorSearch = filtradosPorCategoria.filter(e=>e.name.toLowerCase().includes(search.value.toLowerCase()))
  toPrintCards(filtradosPorSearch,container)

  if(checked.length === 0){
    toPrintCards(array,container)
  }
}



