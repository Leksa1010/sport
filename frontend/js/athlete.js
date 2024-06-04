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
            // copy.querySelector('.sport').innerText = athlete.sportId
            // copy.querySelector('.coach').innerText = athlete.coachId
            copy.querySelector('.created').innerText = formatDate(athlete.createdAt)
            copy.querySelector('.updated').innerText = formatDate(athlete.updatedAt)
            copy.querySelector('.edit').href = `./edit-athlete.html?id=${athlete.id}`
            table.appendChild(copy)
        })
    })