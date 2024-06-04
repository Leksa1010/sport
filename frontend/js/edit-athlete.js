const id = params.get('id')

if (id === null || id === '')
    window.location.href = './athlete.html'

const breadcrumb = document.getElementById('breadcrumb')
const aid = document.getElementById('id')
const aname = document.getElementById('name')
const surname = document.getElementById('surname')
const gender = document.getElementById('gender')
const sport = document.getElementById('sport')
const coach = document.getElementById('coach')
const created = document.getElementById('created')
const updated = document.getElementById('updated')



fetch('http://localhost:8000/api/athlete/id/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json()

        alert('Sportista nije pronađen')
        window.location.href = './athlete.html'
    })
    .then(data => {
        breadcrumb.innerText= `${data.name} ${data.surname}`
        aid.value = data.id
        aname.value = data.name
        surname.value = data.surname
        gender.value = data.gender
        sport.value = data.sport.name
        coach.value = data.coach.name
        created.value = formatDate(data.createdAt)
        updated.value = formatDate(data.updated)

        document.getElementById('save').addEventListener('click', () => {
            fetch({
                url: `http://localhost:8000/api/athlete/id/${data.id}`
                method: 'PUT'
                body: {
                    
                }
            })
        })
    })