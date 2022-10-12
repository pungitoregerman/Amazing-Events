let containerUpcomingEventsCards = document.getElementById("container-cards-upcomingEvents");
let dateOfEvents;
let arrayEvents= [];

dateOfEvents = data.currentDate;
arrayEvents = data.events;

function addCardsByDateUp(dataArray,date,containerCards,order){
  if(order === '>'){
    for (let i = 0; i < dataArray.length; i++) {
      if(dataArray[i].date > date){
      let div = document.createElement("div");
      div.className = "row gap-3 justify-content-evenly";
      div.innerHTML += `
        <div class="card p-2" style="width: 18rem;">
        <img src="${dataArray[i].image}" class="card-img-top" alt="${dataArray[i].name}">
        <div class="card-body">
        <h5 class="card-title">${dataArray[i].name}</h5>
        <p class="card-text">${dataArray[i].description}</p>
        <div class="d-flex flex-direction-row ">
            <div class="col-6">
            <p>price: ${dataArray[i].price}</p>
            </div>
            <div class="col-6">
            <a href="#" class="btn btn-primary bg-button-main">More details</a>
            </div>
        </div> 
        </div>
        `
        containerCards.appendChild(div);
      }
  }
  }
  if(order ==='<'){
    for (let i = 0; i < dataArray.length; i++) {
      if(dataArray[i].date < date){
      let div = document.createElement("div");
      div.className = "row gap-3 justify-content-evenly";
      div.innerHTML += `
        <div class="card p-2" style="width: 18rem;">
        <img src="${dataArray[i].image}" class="card-img-top" alt="${dataArray[i].name}">
        <div class="card-body">
        <h5 class="card-title">${dataArray[i].name}</h5>
        <p class="card-text">${dataArray[i].description}</p>
        <div class="d-flex flex-direction-row ">
            <div class="col-6">
            <p>price: ${dataArray[i].price}</p>
            </div>
            <div class="col-6">
            <a href="#" class="btn btn-primary bg-button-main">More details</a>
            </div>
        </div> 
        </div>
        `
        containerCards.appendChild(div);
      }
    } 
  }
}
addCardsByDateUp(arrayEvents,dateOfEvents,containerUpcomingEventsCards , '>').innerHTML += containerUpcomingEventsCards 

