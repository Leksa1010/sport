const id = params.get('id')

if (id === null || id === '')
    window.location.href = './athlete.html'

fetch('http://localhost:8000/api/athlete/id/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json()

        alert('Sportista nije pronađen')
        window.location.href = './athlete.html'
    })
    .then(data => {
        document.getElementById('breadcrumb').innerText= `${data.name} ${data.surname}`
        document.getElementById('id').value = data.id
        document.getElementById('name').value = data.name
        document.getElementById('surname').value = data.surname
        document.getElementById('gender').value = data.gender
        document.getElementById('sport').value = data.sport
        document.getElementById('coach').value = data.coach
        document.getElementById('created').value = formatDate(data.createdAt)
        document.getElementById('updated').value = formatDate(data.updated)


    })