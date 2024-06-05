package rs.ac.singidunum.sport.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.sport.Gender;
import rs.ac.singidunum.sport.entity.Athlete;
import rs.ac.singidunum.sport.model.AthleteModel;
import rs.ac.singidunum.sport.repository.AthleteRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AthleteService {

    private final AthleteRepository repository;

    public List<Athlete> getAllAthletes() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Athlete> getAthleteById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public List<Athlete> getAthleteByName(String name) {
        return repository.findByNameContainsAndDeletedAtIsNull(name);
    }

    public List<Athlete> getAthleteByGender(Gender gender) {
        return repository.findByGenderAndDeletedAtIsNull(gender);
    }
    public Athlete createAthlete(AthleteModel model) {
        Athlete athlete = new Athlete();
        athlete.setName(model.getName());
        athlete.setSurname(model.getSurname());
        athlete.setGender(model.getGender());
        athlete.setSport(model.getSport());
        athlete.setCoach(model.getCoach());
        return repository.save(athlete);
    }

    public Athlete updateAthlete(Integer id, AthleteModel model) {
        Athlete athlete = repository.findById(id).orElse(null);
        athlete.setName(model.getName());
        athlete.setSurname(model.getSurname());
        athlete.setGender(model.getGender());
        athlete.setSport(model.getSport());
        athlete.setCoach(model.getCoach());
        athlete.setUpdatedAt(LocalDateTime.now());
        return repository.save(athlete);
    }

    public void deleteAthlete(Integer id) {
        Athlete athlete = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        athlete.setDeletedAt(LocalDateTime.now());
        repository.save(athlete);
    }
}

