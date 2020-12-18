let dateEl = document.getElementById('date')
let timeEl = document.getElementById('time')

setInterval(() => {
    let hora = new Date
    let displayTime = hora.toLocaleTimeString('pt-BR')
    let displayDate = hora.toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'short',
        year:'numeric'
    }) 

    dateEl.innerHTML = displayDate
    timeEl.innerHTML = displayTime

},1000)







