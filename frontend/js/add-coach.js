const breadcrumb = document.getElementById('breadcrumb')
const cname = document.getElementById('name')
const surname = document.getElementById('surname')

breadcrumb.innerText = 'Dodavanje novog trenera'

// Add event listener to save button
document.getElementById('save').addEventListener('click', () => {
    const payload = {
        name: cname.value,
        surname: surname.value
    }
    fetch('http://localhost:8000/api/coach', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(rsp => {
            if (rsp.ok) {
                window.location.href = './coach.html'
                return
            }
            return rsp.json().then(error => {
                alert(`Dodavanje trenera nije uspelo: ${error.message} (HTTP ${rsp.status})`)
            })
        })
        .catch(error => {
            alert(`Došlo je do greške: ${error.message}`)
        })
})