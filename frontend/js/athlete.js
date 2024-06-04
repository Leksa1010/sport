const table = document.getElementById('table')
const template = document.getElementById('athlete')
const searchTitle = document.getElementById('search-title')

if (searchParam != null && searchParam != '') {
    searchTitle.innerText = 'Pretraga sportista'
    fetchAthletes()
} else {
    searchTitle.innerText = 'Lista sportista'
    fetchAthletes()
}

function fetchAthletes(url = '') {
    fetch(`http://localhost:8000/api/athlete${url}`)// treba dodati ${url} na kraju template
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length == 0) {
                alert('Sportista nije pronađen')
                window.location.href = '/'
                return
            }
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
}