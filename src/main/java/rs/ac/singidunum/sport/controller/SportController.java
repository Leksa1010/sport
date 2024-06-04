package rs.ac.singidunum.sport.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.sport.entity.Sport;
import rs.ac.singidunum.sport.service.SportService;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping(path = "/api/sport")
public class SportController {

    private final SportService service;

    @GetMapping
    public List<Sport> getAll() {
        return service.getAllSports();
    }

    @GetMapping(path = "/id/{id}")
    public ResponseEntity<Sport> getById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getSportById(id));
    }

    @PostMapping
    public Sport createSport(@RequestBody Sport sport) {
        return service.createSport(sport);
    }

    @DeleteMapping(path = "/id/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteSport(@PathVariable Integer id) {
        service.deleteSport(id);
    }
}
