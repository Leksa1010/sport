package rs.ac.singidunum.sport.controller;

import lombok.RequiredArgsConstructor;
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
    public Optional<Athlete> getAthleteById(@PathVariable Integer id) {
        return service.getAthleteById(id);
    }

    @GetMapping(path = "/name/{name}")
    public Optional<Athlete> getAthleteByName(@PathVariable String name) {
        return service.getAthleteByName(name);
    }

    @GetMapping(path = "/gender/{gender}")
    public List<Athlete> getAthleteByGender(@PathVariable Gender gender) {
        return service.getAthleteByGender(gender);
    }
}
