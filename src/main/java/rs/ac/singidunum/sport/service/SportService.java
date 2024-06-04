package rs.ac.singidunum.sport.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.sport.entity.Sport;
import rs.ac.singidunum.sport.repository.SportRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SportService {

    private final SportRepository repository;

    public List<Sport> getAllSports() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Sport> getSportById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Sport createSport(Sport sport) {
        sport.setId(null);
        sport.setCreatedAt(LocalDateTime.now());
        return repository.save(sport);
    }

    public void deleteSport(Integer id) {
        Sport sport = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        sport.setDeletedAt(LocalDateTime.now());
        repository.save(sport);
    }
}
