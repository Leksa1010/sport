const id = new URLSearchParams(window.location.search).get('id')

if (!id) {
    window.location.href = './coach.html'
}

const breadcrumb = document.getElementById('breadcrumb')
const cid = document.getElementById('id')
const cname = document.getElementById('name')
const surname = document.getElementById('surname')
const created = document.getElementById('created')
const updated = document.getElementById('updated')

fetch(`http://localhost:8000/api/coach/id/${id}`)
    .then(rsp => {
        if (rsp.status === 200) {
            return rsp.json();
        }
        alert('Sportista nije pronađen')
        window.location.href = './coach.html'
    })
    .then(data => {
        breadcrumb.innerText = `${data.name} ${data.surname}`
        cid.value = data.id
        cname.value = data.name
        surname.value = data.surname
        created.value = formatDate(data.createdAt)
        updated.value = formatDate(data.updatedAt)

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8000/api/coach/id/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: data.id,
                    name: cname.value,
                    surname: surname.value,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './coach.html';
                        return;
                    }
                    return rsp.json().then(error => {
                        alert(`Izmena trenera nije uspela: ${error.message} (HTTP ${rsp.status})`)
                    })
                })
                .catch(error => {
                    alert(`Došlo je do greške: ${error.message}`)
                })
        })
    })