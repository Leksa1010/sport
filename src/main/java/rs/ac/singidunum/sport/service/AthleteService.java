package rs.ac.singidunum.sport.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.sport.Gender;
import rs.ac.singidunum.sport.entity.Athlete;
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

    public Athlete createAthlete(Athlete athlete) {
        athlete.setId(null);
        athlete.setCreatedAt(LocalDateTime.now());
        return repository.save(athlete);
    }

    public Athlete updateAthlete(Integer id, Athlete athlete) {
        athlete.setId(id);
        athlete.setUpdatedAt(LocalDateTime.now());
        return repository.save(athlete);
    }

    public void deleteAthlete(Integer id) {
        Athlete athlete = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        athlete.setDeletedAt(LocalDateTime.now());
        repository.save(athlete);
    }
}
