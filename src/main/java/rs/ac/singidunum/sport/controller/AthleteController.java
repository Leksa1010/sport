package rs.ac.singidunum.sport.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.sport.Gender;
import rs.ac.singidunum.sport.entity.Athlete;
import rs.ac.singidunum.sport.service.AthleteService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/athlete")
@RequiredArgsConstructor
@CrossOrigin
public class AthleteController {

    private final AthleteService service;

    @GetMapping
    public List<Athlete> getAllAthletes() {
        return service.getAllAthletes();
    }

    @GetMapping(path = "/id/{id}")
    public ResponseEntity<Athlete> getAthleteById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getAthleteById(id));
    }

    @GetMapping(path = "/name/{name}")
    public List<Athlete> getAthleteByName(@PathVariable String name) {
        return service.getAthleteByName(name);
    }

    @GetMapping(path = "/gender/{gender}")
    public List<Athlete> getAthleteByGender(@PathVariable Gender gender) {
        return service.getAthleteByGender(gender);
    }

    @PostMapping
    public Athlete createAthlete(@RequestBody Athlete athlete) {
        return service.createAthlete(athlete);
    }

    @PutMapping(path = "/id/{id}")
    public Athlete updateAthlete(@PathVariable Integer id, Athlete athlete) {
        return service.updateAthlete(id, athlete);
    }

    @DeleteMapping(path = "/id/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteAthlete(@PathVariable Integer id) {
        service.deleteAthlete(id);
    }
}
