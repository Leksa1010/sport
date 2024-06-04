package rs.ac.singidunum.sport.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import rs.ac.singidunum.sport.Gender;

import java.time.LocalDateTime;

@Entity(name = "athlete")
@NoArgsConstructor
@Getter
@Setter
public class Athlete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "athlete_id")
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne(optional = false)
    @JoinColumn(name ="sport_id" , nullable = false)
    private Sport sport;

    @ManyToOne(optional = false)
    @JoinColumn(name ="coach_id" , nullable = false)
    private Coach coach;

    private LocalDateTime updatedAt;

    @JsonIgnore
    private LocalDateTime deletedAt;
}
