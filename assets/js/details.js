let containerDetailsCards = document.getElementById("container-cards-details");

let dateOfEvents;
let arrayEvents= [];

dateOfEvents = data.currentDate;
arrayEvents = data.events;

let arrayEventsDetailsAssistance = arrayEvents.filter(e=> e.assistance)
                                              .forEach(events => addCardsDetailsAssistance(events,containerDetailsCards))

                                             
let arrayEventsDetailsEstimate = arrayEvents.filter(e=> e.estimate)
                    .forEach(events =>  addCardsDetailsEstimate(events,containerDetailsCards));

function addCardsDetailsAssistance(arrayEvents,container){
  let div = document.createElement("div");
    div.className = "container p-5";
    div.innerHTML += `
      <div class="card mb-3" style="max-width: 800px;">
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${arrayEvents.image}" class="img-fluid rounded-start" alt="foodFair">
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
      <div class="card mb-3" style="max-width: 800px;">
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${arrayEvents.image}" class="img-fluid rounded-start" alt="foodFair">
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

