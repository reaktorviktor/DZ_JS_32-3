fetch('peoples.json')
    .then(response => response.json())
    .then(data => {
        const peopleContainer = document.getElementById('people-container')
        data.forEach(person => {
            const card = document.createElement('div')
            card.classList.add('card')
            const {name, age, job } = person
            card.innerHTML = `
        <h2>Имя: ${name}</h2>
        <p>Возраст: ${age}</p>
        <p>Профессия: ${job}</p>
      `
            peopleContainer.appendChild(card)
        })
    })
const xhr = new XMLHttpRequest()
xhr.open('GET', 'dz2.json', true)
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr.responseText)
        console.log(response)
    }
}
xhr.send()