let containerDetailsCards = document.getElementById("container-cards-details");

async function apiAmazingDetails(){
  try{
    let id = location.search.slice(8)
    let data = await fetch(`https://mind-hub.up.railway.app/amazing/`)    
    data = await data.json() 
    let eventos = data.events
    eventos.filter(e=> {
      if(e.id === id && e.assistance){
        addCardsDetailsAssistance(e,containerDetailsCards)
      }
      if(e.id === id && e.estimate){
        addCardsDetailsEstimate(e,containerDetailsCards)
      }
    })
    /* getEvents(eventos,id) */
  }
  catch(error){
  console.log('Hubo un error al consumir la API')
}
}
apiAmazingDetails()

function addCardsDetailsAssistance(arrayEvents,container){
  let div = document.createElement("div");
    div.className = "container p-5";
    div.innerHTML += `
      <div class="card mb-3" style="max-width: 800px;">
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${arrayEvents.image}" class="img-fluid rounded-start" alt="${arrayEvents.name}">
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
    div.className = "container p-5";
    div.innerHTML += `
      <div class="card mb-3" style="max-width: 650px;">
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${arrayEvents.image}" class="img-fluid rounded-start" alt="${arrayEvents.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${arrayEvents.name}</h5>
                  <p class="card-text">date: ${arrayEvents.date}</p>
                  <p class="card-text">description: ${arrayEvents.description}</p>
                  <p class="card-text">category: ${arrayEvents.category}</p>
                  <p class="card-text">place: ${arrayEvents.place}</p>
                  <p class="card-text">capacity: ${arrayEvents.capacity}</p>
                  <p class="card-text">estimate: ${arrayEvents.estimate}</p>
                  <p class="card-text">price: ${arrayEvents.price}</p>
                </div>
              </div>
            </div>
          </div>
      `
      container.appendChild(div);
}


