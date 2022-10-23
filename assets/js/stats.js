let tableOneHtml = document.getElementById('trOne')
let tableTwoHtml = document.getElementById('UpcomingStats')

async function staticsAmazing(){
    try{
      let data = await fetch('https://mind-hub.up.railway.app/amazing')    
      data = await data.json()
      let events = data.events
      let date = data.date
      let eventsPast = events.filter(e=> e.date < date)
      let eventsComing = events.filter(e=> e.date > date)
      
      console.log(events)
      
      let categories = new Set(events.map(events=> events.category).sort())
      categories = Array.from(categories)
      console.log(categories) 
      
      /* PRIMER TABLA */
      let ordenadosPorCapacidad = [...events]
      let asistencia = [...eventsPast]
      ordenadosPorCapacidad.sort((evento1,evento2) => evento2.capacity - evento1.capacity)
      asistencia.sort((evento1,evento2) => (100*evento2.assistance/evento2.capacity)-(100*evento1.assistance/evento1.capacity))
      let mayorAsistencia = asistencia[0]
      let menorAsistencia = asistencia[asistencia.length-1]       
      let mayorCapacidad = ordenadosPorCapacidad[0];
      tableOne(tableOneHtml,mayorAsistencia,menorAsistencia,mayorCapacidad); 
      /* FIN TABLA */
      
      /* SEGUNDA TABLA */
      /* FIN TABLA */


  }catch(error){
    console.log('ERROR!')
  }
}
staticsAmazing()

function tableOne(tabla,mayorAsistencia,menorAsistencia,mayorCapacity){
    tabla.innerHTML += `<td class="border-dark col-3 table-secondary">${mayorAsistencia.name}</td>`
    tabla.innerHTML += `<td class="border-dark col-3 table-secondary">${menorAsistencia.name}</td>`
    tabla.innerHTML +=`<td class="border-dark col-3 table-secondary">${mayorCapacity.name}</td>`
}
