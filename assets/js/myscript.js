/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

// faccio due variabili 
 
const archiveEl = document.querySelector(".archive")
const celleMax = 100

// faccio un ciclo in cui itero per 100 volte in modo tale da creare le celle

for (let i = 0; i < celleMax ; i++) {
    const cellaElement  = document.createElement('div')
    cellaElement.className = 'celle'
    cellaElement.innerText = i + 1
    archiveEl.append(cellaElement)
    console.log(archiveEl);
    
}