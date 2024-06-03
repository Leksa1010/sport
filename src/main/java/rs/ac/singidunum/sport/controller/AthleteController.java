package rs.ac.singidunum.sport.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.sport.entity.Athlete;
import rs.ac.singidunum.sport.repository.AthleteRepository;

import java.util.List;

@RestController
@RequestMapping(path = "/athlete")
@RequiredArgsConstructor
@CrossOrigin
public class AthleteController {

    private final AthleteRepository repository;

    @GetMapping
    public List<Athlete> getAllAthletes() {
        return repository.findAll();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Athlete> getAthleteById(@PathVariable Integer id) {
        return ResponseEntity.of(repository.findById(id));
    }
}
