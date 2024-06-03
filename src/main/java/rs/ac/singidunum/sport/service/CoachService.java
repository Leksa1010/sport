package rs.ac.singidunum.sport.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.sport.entity.Coach;
import rs.ac.singidunum.sport.repository.CoachRepository;

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
}
