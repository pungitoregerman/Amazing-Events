let containerPastEventsCards = document.getElementById("container-cards-pastEvents");

let dateOfEvents  = data.currentDate;
let arrayEvents = data.events;

let arrayEventsPast = arrayEvents.filter((events) => events.date < dateOfEvents)
                                .forEach(events => addCards(events,containerPastEventsCards))
console.log(arrayEventsPast);

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
