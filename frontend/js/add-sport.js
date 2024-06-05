const breadcrumb = document.getElementById('breadcrumb')
const sname = document.getElementById('name')

breadcrumb.innerText = 'Dodavanje novog sporta'

// Add event listener to save button
document.getElementById('save').addEventListener('click', () => {
    const payload = {
        name: sname.value,
    }
    fetch('http://localhost:8000/api/sport', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(rsp => {
            if (rsp.ok) {
                window.location.href = './sport.html'
                return
            }
            return rsp.json().then(error => {
                alert(`Dodavanje sporta nije uspelo: ${error.message} (HTTP ${rsp.status})`)
            })
        })
        .catch(error => {
            alert(`Došlo je do greške: ${error.message}`)
        })
})