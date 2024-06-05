const id = new URLSearchParams(window.location.search).get('id');

if (!id) {
    window.location.href = './athlete.html';
}

const breadcrumb = document.getElementById('breadcrumb');
const aid = document.getElementById('id');
const aname = document.getElementById('name');
const surname = document.getElementById('surname');
const gender = document.getElementById('gender');
const sport = document.getElementById('sport');
const coach = document.getElementById('coach');
const created = document.getElementById('created');
const updated = document.getElementById('updated');

fetch(`http://localhost:8000/api/athlete/id/${id}`)
    .then(rsp => {
        if (rsp.status === 200) {
            return rsp.json();
        }
        alert('Sportista nije pronađen');
        window.location.href = './athlete.html';
    })
    .then(data => {
        breadcrumb.innerText = `${data.name} ${data.surname}`;
        aid.value = data.id;
        aname.value = data.name;
        surname.value = data.surname;
        gender.value = data.gender;
        sport.value = data.sport.name;
        coach.value = data.coach.name;
        created.value = formatDate(data.createdAt);
        updated.value = formatDate(data.updatedAt);

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
                        sport: {
                            id: data.coach.sport.id,
                            name: data.coach.sport.name,
                            createdAt: data.coach.sport.createdAt,
                            updatedAt: data.coach.sport.updatedAt
                        }
                    }
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './athlete.html';
                        return;
                    }
                    return rsp.json().then(error => {
                        alert(`Izmena sportiste nije uspela: ${error.message} (HTTP ${rsp.status})`);
                    });
                })
                .catch(error => {
                    alert(`Došlo je do greške: ${error.message}`);
                });
        });
    })
    .catch(error => {
        alert(`Došlo je do greške prilikom preuzimanja podataka: ${error.message}`);
    });
