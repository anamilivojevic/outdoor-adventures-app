package exe.outdooradventures.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import exe.outdooradventures.entity.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {
}
