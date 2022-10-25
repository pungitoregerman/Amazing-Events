let tableOne = document.getElementById("tableOne");
let tableTwo = document.getElementById("tableTwo")
let tableThree = document.getElementById("tableThree")
let data;
let events;
let date;
let eventsPast;
let eventsComing;

async function staticsAmazing() {
  try {
    data = await fetch('https://mh-amazing.herokuapp.com/amazing');
    data = await data.json();
    events = data.events;
    date = data.date;
    eventsPast = events.filter((e) => e.date < date);
    eventsComing = events.filter((e) => e.date > date); 
    
    /* PRIMER TABLA */
    let mayorAsistencia = calcularMayorAsistencia(eventsPast);
    let menorAsistencia = calcularMenorAsistencia(eventsPast);
    let mayorCapacidad = ordenarPorCapacidad(eventsPast);
    tableCreate(tableOne, mayorAsistencia, menorAsistencia, mayorCapacidad); 
    /* FIN TABLA */
    /* SEGUNDA TABLA */  
    stats(eventsComing,'estimate', tableTwo)  
    /* FIN TABLA */
    /* TERCER TABLA */
    stats(eventsPast,'assistance', tableThree)
    /* FIN TABLA */
  }catch (error) {
    console.log("ERROR!");
  }
}
staticsAmazing();

/* FUNCIONES TABLA UNO */
function tableCreate(contenedor,mayorAsistencia, menorAsistencia, mayorCapacidad){
  contenedor.innerHTML += `
            <td>${mayorAsistencia.name}</td>
            <td>${menorAsistencia.name}</td>
            <td>${mayorCapacidad.name}</td>`
}
function calcularMayorAsistencia(array){
  let asistenciaOrdenada = [...array.sort((evento1, evento2) =>(100 * evento1.assistance)/evento1.capacity - (100*evento2.assistance)/evento2.capacity)];
  let mayorAsistencia = asistenciaOrdenada[asistenciaOrdenada.length -1];
  return mayorAsistencia
}
function calcularMenorAsistencia(array){
  let asistenciaOrdenada = [...array.sort((evento1, evento2) =>(100 * evento1.assistance)/evento1.capacity - (100*evento2.assistance)/evento2.capacity)];
  let menorAsistencia = asistenciaOrdenada[0];
  return menorAsistencia
}
function ordenarPorCapacidad(array){
  let capacidadOrdenada = [...array.sort((evento1, evento2) => evento1.capacity - evento2.capacity)];
  let mayorCapacidad = capacidadOrdenada[capacidadOrdenada.length -1]
  return mayorCapacidad
}
/* FIN FUNCIONES TABLA UNO */

/* FUNCION DE TABLA 2 ESTIMATE Y 3 ASSISTANCE */
function stats(array,property,table)  {
  array.map(event => {
    event.ganancia = event[property]  * event.price
    event.porcentaje = (100 * event[property] / event.capacity)
})

  let categories = Array.from(new Set(array.map(event => event.category))).sort()
 
  let stats = categories.map(categorie => {
      let filtrados = array.filter(event => event.category === categorie)
      return reduceStats(filtrados,property)
  })
  addStatsTable(stats,table)
}



function reduceStats (array,property){
  let StateZero = {
      category: "",
      ganancia: 0,
      capacity: 0,
      [property]: 0
  }
  let stats = array.reduce((element1,element2) => {
      return {
          category: element2.category,
          ganancia: element1.ganancia + element2.ganancia,
          capacity: element1.capacity + element2.capacity,
          [property]: element1[property] + element2[property]
      }
  }, StateZero)
  stats.promedio = (100 * stats[property] / stats.capacity).toFixed(0)
  return stats
}


function addStatsTable(array,tabla){
  array.forEach(element => {
      tabla.innerHTML +=
      `
    <tr><td>${element.category}</td>
        <td class="text-center">$${element.ganancia}</td>
        <td class="text-center">${element.promedio}%</td>     
    </tr>
      `
  })
}