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
            copy.querySelector('.sport').innerText = coach.sport.name
            copy.querySelector('.created').innerText = formatDate(coach.createdAt)
            copy.querySelector('.updated').innerText = formatDate(coach.updatedAt)
            copy.querySelector('.edit').href = `./edit-coach.html?id=${coach.id}`
            table.appendChild(copy)
        })
    })