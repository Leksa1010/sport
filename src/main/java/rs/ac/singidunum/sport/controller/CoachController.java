package rs.ac.singidunum.sport.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.sport.entity.Coach;
import rs.ac.singidunum.sport.service.CoachService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/coach")
@RequiredArgsConstructor
@CrossOrigin
public class CoachController {

    private final CoachService service;

    @GetMapping
    public List<Coach> getAllCoaches() {
        return service.getAllCoaches();
    }

    @GetMapping(path = "/id/{id}")
    public ResponseEntity<Coach> getCoachById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getCoachById(id));
    }

    @GetMapping(path = "/name/{name}")
    public List<Coach> getCoachByName(@PathVariable String name) {
        return service.getCoachesByName(name);
    }

    @PostMapping
    public Coach createCoach(@RequestBody Coach coach) {
        return service.createCoach(coach);
    }

    @PutMapping(path = "/id/{id}")
    public Coach updateCoach(@PathVariable Integer id, Coach coach) {
        return service.updateCoach(id, coach);
    }

    @DeleteMapping(path = "/id/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteCoach(@PathVariable Integer id) {
        service.deleteCoach(id);
    }
}
