const id = new URLSearchParams(window.location.search).get('id')

if (!id) {
    window.location.href = './athlete.html'
}

const breadcrumb = document.getElementById('breadcrumb')
const aid = document.getElementById('id')
const aname = document.getElementById('name')
const surname = document.getElementById('surname')
const gender = document.getElementById('gender')
const sport = document.getElementById('sport')
const coach = document.getElementById('coach')
const created = document.getElementById('created')
const updated = document.getElementById('updated')

fetch(`http://localhost:8000/api/athlete/id/${id}`)
    .then(rsp => {
        if (rsp.status === 200) {
            return rsp.json();
        }
        alert('Sportista nije pronađen')
        window.location.href = './athlete.html'
    })
    .then(data => {
        breadcrumb.innerText = `${data.name} ${data.surname}`
        aid.value = data.id
        aname.value = data.name
        surname.value = data.surname
        //gender.value = data.gender

        const genders = ['M', 'F'];
        genders.forEach(g => {
            const genderOption = document.createElement('option');
            genderOption.value = g;
            genderOption.text = g;
            if (g === data.gender) {
                genderOption.selected = true;
            }
            gender.appendChild(genderOption);
        });
        // sport.value = data.sport.name
        // Loading sport
        fetch('http://localhost:8000/api/sport')
            .then(rsp => rsp.json())
            .then(sportData => {
                sportData.forEach(sportType => {
                    const sportOption = document.createElement('option');
                    if (sportType.id === data.sport.id) {
                        sportOption.selected = true;
                    }
                    sportOption.value = sportType.id;
                    sportOption.text = sportType.name;
                    sport.appendChild(sportOption);
                })
            })

        //coach.value = data.coach.name
        //Loading coach
        fetch('http://localhost:8000/api/coach')
            .then(rsp => rsp.json())
            .then(coachData => {
                coachData.forEach(coachType => {
                    const coachOption = document.createElement('option');
                    if (coachType.id === data.coach.id) {
                        coachOption.selected = true;
                    }
                    coachOption.value = coachType.id;
                    coachOption.text = coachType.name;
                    coach.appendChild(coachOption);
                })
            })
        created.value = formatDate(data.createdAt)
        updated.value = formatDate(data.updatedAt)

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8000/api/athlete/id/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: data.id,
                    name: aname.value,
                    surname: surname.value,
                    gender: gender.value,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                    sport: {
                        id: data.sport.id,
                        name: sport.value,
                        createdAt: data.sport.createdAt,
                        updatedAt: data.sport.updatedAt
                    },
                    coach: {
                        id: data.coach.id,
                        name: coach.value,
                        surname: data.coach.surname,
                        createdAt: data.coach.createdAt,
                        updatedAt: data.coach.updatedAt,
                    }
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './athlete.html';
                        return;
                    }
                    return rsp.json().then(error => {
                        alert(`Izmena sportiste nije uspela: ${error.message} (HTTP ${rsp.status})`)
                    })
                })
                .catch(error => {
                    alert(`Došlo je do greške: ${error.message}`)
                })
        })
    })