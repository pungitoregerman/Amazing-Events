let containerHomeCards = document.getElementById("container-cards-home");

let dateOfEvents;
let arrayEvents= [];

dateOfEvents = data.currentDate;
arrayEvents = data.events;

for (let i = 0; i < arrayEvents.length; i++) {
  let div = document.createElement("div");
  div.className = "row gap-3 justify-content-evenly";
  div.innerHTML += `
    <div class="card p-2" style="width: 18rem;">
    <img src="${arrayEvents[i].image}" class="card-img-top" alt="${arrayEvents[i].name}">
    <div class="card-body">
    <h5 class="card-title">${arrayEvents[i].name}</h5>
    <p class="card-text">${arrayEvents[i].description}</p>
    <div class="d-flex flex-direction-row ">
        <div class="col-6">
        <p>price: ${arrayEvents[i].price}</p>
        </div>
        <div class="col-6">
        <a href="#" class="btn btn-primary bg-button-main">More details</a>
        </div>
    </div> 
    </div>
    `
  containerHomeCards.appendChild(div);
}
 

  
