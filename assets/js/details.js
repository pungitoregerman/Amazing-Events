let containerDetailsCards = document.getElementById("container-cards-details");

let dateOfEvents;
let arrayEvents= [];

dateOfEvents = data.currentDate;
arrayEvents = data.events;

for (let i = 0; i < arrayEvents.length; i++) {
    let div = document.createElement("div");
    div.className = "container p-5";
    div.innerHTML += `
      <div class="card mb-3" style="max-width: 800px;">
      <div class="row g-0">
              <div class="col-md-4">
                <img src="${arrayEvents[i].image}" class="img-fluid rounded-start" alt="foodFair">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${arrayEvents[i].name}</h5>
                  <p class="card-text">id: ${arrayEvents[i].id}</p>
                  <p class="card-text">date: ${arrayEvents[i].date}</p>
                  <p class="card-text">description: ${arrayEvents[i].description}</p>
                  <p class="card-text">category: ${arrayEvents[i].category}</p>
                  <p class="card-text">place: ${arrayEvents[i].place}</p>
                  <p class="card-text">capacity: ${arrayEvents[i].capacity}</p>
                  <p class="card-text">assistance: ${arrayEvents[i].assistance}</p>
                  <p class="card-text">price: ${arrayEvents[i].price}</p>
                </div>
              </div>
            </div>
          </div>
      `
    containerDetailsCards.appendChild(div);
}



