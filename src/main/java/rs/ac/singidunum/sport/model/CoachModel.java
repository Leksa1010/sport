package rs.ac.singidunum.sport.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rs.ac.singidunum.sport.entity.Sport;

@NoArgsConstructor
@Getter
@Setter
public class CoachModel {

    private String name;
    private String surname;
    private Sport sport;
}
