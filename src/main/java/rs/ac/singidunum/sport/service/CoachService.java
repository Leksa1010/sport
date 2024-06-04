package rs.ac.singidunum.sport.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.sport.entity.Coach;
import rs.ac.singidunum.sport.entity.Coach;
import rs.ac.singidunum.sport.repository.CoachRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CoachService {

    private final CoachRepository repository;

    public List<Coach> getAllCoaches(){
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Coach> getCoachById(Integer id){
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public List<Coach> getCoachesByName(String name){
        return repository.findByNameAndDeletedAtIsNull(name);
    }

    public Coach createCoach(Coach coach) {
        coach.setId(null);
        coach.setCreatedAt(LocalDateTime.now());
        return repository.save(coach);
    }

    public Coach updateCoach(Integer id, Coach coach) {
        coach.setId(id);
        coach.setUpdatedAt(LocalDateTime.now());
        return repository.save(coach);
    }

    public void deleteCoach(Integer id) {
        Coach coach = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        coach.setDeletedAt(LocalDateTime.now());
        repository.save(coach);
    }
}
