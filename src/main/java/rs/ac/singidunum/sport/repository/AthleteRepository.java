package rs.ac.singidunum.sport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.sport.entity.Athlete;

@Repository
public interface AthleteRepository extends JpaRepository<Athlete, Integer> {

}
