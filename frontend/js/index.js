const table = document.getElementById('table')
const template = document.getElementById('athlete')

fetch('http://localhost:8000/api/athlete')
    .then(rsp => rsp.json())
    .then(data => {
        data.forEach(athlete => {
            const copy = template.content.cloneNode(true)
            copy.querySelector('.id').innerText = athlete.id
            copy.querySelector('.name').innerText = athlete.name
            copy.querySelector('.surname').innerText = athlete.surname
            copy.querySelector('.gender').innerText = athlete.gender
            copy.querySelector('.created').innerText = new Date(athlete.createdAt).toLocaleString('sr-RS')
            table.appendChild(copy)
        })
    })