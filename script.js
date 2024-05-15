let listaSpesa = ['frutta', 'verdura', 'arance', 'cocomeri', 'piselli'];
let ulElement = document.querySelector('ul');

let i = 0;
while (i < listaSpesa.length) {
    // Creo nell'HTML un li
    let liEl = document.createElement('li')
    // Questo li ha al suo interno gli elementi della listaSpesa
    liEl.append(listaSpesa[i])
    // Per ogni ul element, aggiungi un li
    ulElement.appendChild(liEl)
    
    i++
}

console.log(listaSpesa, ulElement)


