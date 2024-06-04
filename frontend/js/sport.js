const table = document.getElementById('table')
const template = document.getElementById('sport')


fetch('http://localhost:8000/api/sport')
    .then(rsp => rsp.json())
    .then(data => {
        data.forEach(sport => {
            const copy = template.content.cloneNode(true)
            copy.querySelector('.id').innerText = sport.id
            copy.querySelector('.name').innerText = sport.name
            copy.querySelector('.created').innerText = formatDate(sport.createdAt)
            table.appendChild(copy)
        })
    })