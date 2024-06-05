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
            copy.querySelector('.remove').addEventListener('click', () => {
                if (confirm(`Želite obrisati trenera ${coach.name} ${coach.surname}`)) {
                    fetch(`http://localhost:8000/api/coach/id/${coach.id}`, {
                        method: 'DELETE',
                    })
                        .then(rsp => {
                            if (rsp.status == 204) {
                                window.location.href = './coach.html'
                                return
                            }
                            alert(`Brisanje trenera nije uspelo (HTTP ${rsp.status})`)
                        })
                }
            })
            table.appendChild(copy)
        })
    })