package exe.outdooradventures.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import exe.outdooradventures.entity.Tag;

public interface TagRepository extends JpaRepository<Tag, Integer> {
}
