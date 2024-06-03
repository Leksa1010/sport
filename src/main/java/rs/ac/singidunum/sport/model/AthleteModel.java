package rs.ac.singidunum.sport.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rs.ac.singidunum.sport.Gender;
import rs.ac.singidunum.sport.entity.Sport;

@NoArgsConstructor
@Getter
@Setter
public class AthleteModel {

    private String name;
    private String surname;
    private Gender gender;
    private Sport sport;
}
