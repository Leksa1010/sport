package rs.ac.singidunum.sport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.sport.entity.Sport;

import java.util.List;
import java.util.Optional;

@Repository
public interface SportRepository extends JpaRepository<Sport, Integer> {

    List<Sport> findAllByDeletedAtIsNull();

    Optional<Sport> findByIdAndDeletedAtIsNull(Integer id);
}
