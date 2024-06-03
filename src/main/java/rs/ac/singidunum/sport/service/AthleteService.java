package rs.ac.singidunum.sport.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.sport.Gender;
import rs.ac.singidunum.sport.entity.Athlete;
import rs.ac.singidunum.sport.repository.AthleteRepository;

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

    public Optional<Athlete> getAthleteByName(String name) {
        return repository.findByNameAndDeletedAtIsNull(name);
    }

    public List<Athlete> getAthleteByGender(Gender gender) {
        return repository.findByGenderAndDeletedAtIsNull(gender);
    }
}
