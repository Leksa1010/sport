const table = document.getElementById('table')
const template = document.getElementById('athlete')
const searchTitle = document.getElementById('search-title')

if (searchParam != null && searchParam != '') {
    searchTitle.innerText = 'Pretraga sportista'
    console.log("Radi")
    fetchAthletes('/name/' + searchParam)
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
                window.location.href = './athlete.html'
                return
            }
            data.forEach(athlete => {
                const copy = template.content.cloneNode(true)
                copy.querySelector('.id').innerText = athlete.id
                copy.querySelector('.name').innerText = athlete.name
                copy.querySelector('.surname').innerText = athlete.surname
                copy.querySelector('.gender').innerText = athlete.gender
                copy.querySelector('.sport').innerText = athlete.sport.name
                copy.querySelector('.coach').innerText = athlete.coach.name
                copy.querySelector('.created').innerText = formatDate(athlete.createdAt)
                copy.querySelector('.updated').innerText = formatDate(athlete.updatedAt)
                copy.querySelector('.edit').href = `./edit-athlete.html?id=${athlete.id}`
                copy.querySelector('.remove').addEventListener('click', () => {
                    if (confirm(`Želite obrisati sportistu ${athlete.name} ${athlete.surname}`)) {
                        fetch(`http://localhost:8000/api/athlete/id/${athlete.id}`, {
                            method: 'DELETE',
                        })
                            .then(rsp => {
                                if (rsp.status == 204) {
                                    window.location.href = './athlete.html'
                                    return
                                }
                                alert(`Brisanje sportiste nije uspelo (HTTP ${rsp.status})`)
                            })
                    }
                })
                table.appendChild(copy)
            })
        })
}
