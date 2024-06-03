package rs.ac.singidunum.sport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.sport.Gender;
import rs.ac.singidunum.sport.entity.Athlete;

import java.util.List;
import java.util.Optional;

@Repository
public interface AthleteRepository extends JpaRepository<Athlete, Integer> {

    List<Athlete> findAllByDeletedAtIsNull();

    Optional<Athlete> findByIdAndDeletedAtIsNull(Integer id);

    List<Athlete> findByGenderAndDeletedAtIsNull(Gender gender);
}
