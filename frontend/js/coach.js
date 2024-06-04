const table = document.getElementById('table')
const template = document.getElementById('coach')


fetch('http://localhost:8000/api/coach')
    .then(rsp => rsp.json())
    .then(data => {
        data.forEach(coach => {
            const copy = template.content.cloneNode(true)
            copy.querySelector('.id').innerText = coach.id
            copy.querySelector('.name').innerText = coach.name
            copy.querySelector('.surname').innerText = coach.surname
            // copy.querySelector('.sport').innerText = athlete.sportId
            copy.querySelector('.created').innerText = formatDate(coach.createdAt)
            copy.querySelector('.updated').innerText = formatDate(coach.updatedAt)
            table.appendChild(copy)
        })
    })