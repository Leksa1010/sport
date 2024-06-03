package rs.ac.singidunum.sport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.sport.entity.Coach;

import java.util.List;
import java.util.Optional;

@Repository
public interface CoachRepository extends JpaRepository<Coach, Integer> {

    List<Coach> findAllByDeletedAtIsNull();

    Optional<Coach> findByIdAndDeletedAtIsNull(Integer id);

    List<Coach> findByNameAndDeletedAtIsNull(String name);
}
