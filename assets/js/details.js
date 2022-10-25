let containerDetailsCards = document.getElementById("container-cards-details");
let id;
let data;

async function apiAmazingDetails(){
  try{
    id = location.search.slice(8)
    data = await fetch(`https://mh-amazing.herokuapp.com/amazing`)    
    data = await data.json() 
    let eventos = data.events
    getEvents(eventos,id,containerDetailsCards)
  }
  catch(error){
  console.log('Hubo un error al consumir la API')
}
}
apiAmazingDetails()

function addCardsDetailsAssistance(arrayEvents,container){
  let div = document.createElement("div");
    div.className =  "card mb-3 style= max-width: 800px; m-3"
    div.innerHTML += `
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${arrayEvents.image}" class="img-fluid rounded hei" alt="${arrayEvents.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${arrayEvents.name}</h5>
                  <p class="card-text">date: ${arrayEvents.date}</p>
                  <p class="card-text">description: ${arrayEvents.description}</p>
                  <p class="card-text">category: ${arrayEvents.category}</p>
                  <p class="card-text">place: ${arrayEvents.place}</p>
                  <p class="card-text">capacity: ${arrayEvents.capacity}</p>
                  <p class="card-text">assistance: ${arrayEvents.assistance}</p>
                  <p class="card-text">price: ${arrayEvents.price}</p>
                </div>
              </div>
            </div>
          </div>
      `
      container.appendChild(div);
}

function addCardsDetailsEstimate(arrayEvents,container){
  let div = document.createElement("div");
  div.className =  "card mb-3 style= max-width: 800px; m-3"
  div.innerHTML += `
    <div class="row g-0">
            <div class="col-md-4">
              <img src="${arrayEvents.image}" class="img-fluid rounded hei" alt="${arrayEvents.name}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${arrayEvents.name}</h5>
                <p class="card-text">date: ${arrayEvents.date}</p>
                <p class="card-text">description: ${arrayEvents.description}</p>
                <p class="card-text">category: ${arrayEvents.category}</p>
                <p class="card-text">place: ${arrayEvents.place}</p>
                <p class="card-text">capacity: ${arrayEvents.capacity}</p>
                <p class="card-text">Estimate: ${arrayEvents.estimate}</p>
                <p class="card-text">price: ${arrayEvents.price}</p>
              </div>
            </div>
          </div>
        </div>
    `
    container.appendChild(div);
}


function getEvents(array,id,contenedor){
  array.filter(e=> {
    if(e.id === id && e.assistance){
      addCardsDetailsAssistance(e,contenedor)
    }
    if(e.id === id && e.estimate){
      addCardsDetailsEstimate(e,contenedor)
    }
  })
}