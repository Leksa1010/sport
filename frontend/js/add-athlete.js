const breadcrumb = document.getElementById('breadcrumb')
const name = document.getElementById('name')
const surname = document.getElementById('surname')

breadcrumb.innerText = 'Dodavanje novog sportiste'

// Create gender options

const genders = ['M', 'F']
genders.forEach(g => {
    const genderOption = document.createElement('option')
    genderOption.value = g
    genderOption.text = g
    gender.appendChild(genderOption)
})

// Load and populate sports

fetch('http://localhost:8000/api/sport')
    .then(rsp => rsp.json())
    .then(sportData => {
        sportData.forEach(sportType => {
            const sportOption = document.createElement('option')
            sportOption.value = sportType.id
            sportOption.text = sportType.name
            sport.appendChild(sportOption)
        })
    })

// Load and populate coaches

fetch('http://localhost:8000/api/coach')
    .then(rsp => rsp.json())
    .then(coachData => {
        coachData.forEach(coachType => {
            const coachOption = document.createElement('option');
            coachOption.value = coachType.id;
            coachOption.text = `${coachType.name} ${coachType.surname}`;
            coach.appendChild(coachOption);
        })
    })

document.getElementById('save').addEventListener('click', () => {
    const payload = {
        name: name.value,
        surname: surname.value,
        gender: gender.value,
        sport: {
            id: sport.id,
            name: sport.name
        },
        coach: {
            id: coach.id,
            name: coach.name,
            surname: coach.surname
        }
    }
    fetch('http://localhost:8000/api/athlete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(rsp => {
            if (rsp.ok) {
                window.location.href = './athlete.html';
                return;
            }
            return rsp.json().then(error => {
                alert(`Dodavanje sportiste nije uspelo: ${error.message} (HTTP ${rsp.status})`);
            });
        })
        .catch(error => {
            alert(`Došlo je do greške: ${error.message}`);
        })
})