package rs.ac.singidunum.sport.error;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ExceptionModel {

    private String name;
    private String message;
    private String path;
}
