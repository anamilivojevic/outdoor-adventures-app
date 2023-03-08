package exe.outdooradventures.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import exe.outdooradventures.entity.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {
}
